# Projekt ereignisgesteuerte App in C#
[project svg](./ProjectLieferdienst.excalidraw.svg)
## Setup the DB
- using maria db MySql and Xampp
```
# login as root
mysql -u root

# DEBUG ONLY DROP TABLE
drop database lieferdienst;

# Datenabank erstellen
CREATE DATABASE lieferdienst;
USE lieferdienst;

CREATE TABLE essen(
    eid INT AUTO_INCREMENT PRIMARY KEY,
    bezeichnung VARCHAR(50),
    preis DECIMAL(5,2),
    info VARCHAR(70)
);

# ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE essen CHARACTER SET = utf8;

# filling some mock-data into the DB:
INSERT INTO essen (bezeichnung, preis, info) VALUES ("Pizza Fungi", 8.89, "Mit pilzen");
INSERT INTO essen (bezeichnung, preis, info) VALUES ("Pizza Tonno", 9.99, "veggy");
INSERT INTO essen (bezeichnung, preis, info) VALUES ("Boulette", 3.20, "");
INSERT INTO essen (bezeichnung, preis, info) VALUES ("Gemuesepfanne", 6.45, "veggy, kann spuren von Nuessen enthalten");
INSERT INTO essen (bezeichnung, preis, info) VALUES ("Creme Catalan", 5.59, "kalorienbombe");

# non root user with access to the table:
CREATE USER ronny@localhost IDENTIFIED BY "1234";
GRANT SELECT ON lieferdienst.essen TO ronny@localhost;

```

## Create a PHP script 
- for indirect access to the DB
- possible improvement: handle credentials in the php.ini
- `C:\xampp\htdocs\ProjectLieferdienst\essen.php`

```php
<?php
    // Connection to the DB-Server
    $db = new mysqli("localhost", "ronny", "1234", "lieferdienst");

    // define the SQL reuqest
    $request = "SELECT eid, bezeichnung, preis, info FROM essen";

    // send request to DB-Server -> get pointer pointing at start of table
    $table = $db->query($request);

    // fetch_assoc() - fetches a result row as an associative array.
    $line = $table->fetch_assoc();
    $data = array(); 

    // keep reading lines
    while ($line == true){
        //print "$line[eid] <br/> $line[bezeichnung] <br/> $line[preis] <br/> <br/>";
        array_push($data, $line);
        $line = $table->fetch_assoc();
    }
    $text = json_encode($data);
    //print_r($data);
    print $text;

    // close connection when done:
    $db->close();
?>
```

## Testing our Data pipeline
![Dataflow svg](./ProjectLieferdienstDataflow.excalidraw.svg)
```cs
namespace HTTP_to_JSON
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("running");
            // run the async Task and wait till it finishes (otherwise no output since it finishes after main):
            Method().Wait();        
        }

        // Task are the async "Threads" of C#
        static async Task Method()
        {
            // make a HTTP request
            HttpClient client = new HttpClient();
            var response = await client.GetAsync("http://localhost/ProjectLieferdienst/essen.php");
            if (response.IsSuccessStatusCode)
            {
                string json = await response.Content.ReadAsStringAsync();
                List<Food> foods = new List<Food>();
                foods = JsonConvert.DeserializeObject<List<Food>>(json);
                foreach (Food food in foods)
                    Console.WriteLine(food);
            }
        }
    }

    // the wrapper for our Data coming as JSON form the DB/PHP pipeline
    public class Food
    {
        public int      eid         { get; set; }
        public string   bezeichnung { get; set; }
        public double   preis       { get; set; }
        public override string ToString()
        {
            string bez = bezeichnung.ToString();
            if (bez.Length > 7) return $"{eid} \t| {bezeichnung}\t| {preis}";
            return $"{eid} \t| {bezeichnung} \t\t| {preis}";
        }
    }
}
```

## Application Layer
- were using a wpf C# Application
- xaml format (a bit like html)
- Goal is to separate the User Interface from other Logic/Dataflow

```xml
<Window 
        Title="Lieferdienst" Height="450" Width="800" Loaded="Window_Loaded">
    <Grid>
        <!-- 2 columns-->
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="60*" />            <!-- 60% der Breite des Fensters -->
            <ColumnDefinition Width="40*" />            <!-- 40% der Breite des Fensters -->
        </Grid.ColumnDefinitions>
        <!-- Left Column | (Binding: keyword that we will provide a reference to a List with Data) -->
        <ListView Grid.Column="0" Name="listView" ItemsSource="{Binding}">
            <ListView.ItemTemplate>
                <DataTemplate>
                    <!-- We describe how each Object should look: -->
                    <StackPanel Orientation="Vertical">
                        <Label Content="{Binding bezeichnung}" FontWeight="Bold" FontSize="20"/>
                        <Label Content="{Binding GetPreis}" Foreground="darkred" FontWeight="Bold" />
                        <Label Content="{Binding info}" Foreground="green" ContentStringFormat="{} infos:{0}" />
                    </StackPanel>
                </DataTemplate>
            </ListView.ItemTemplate>
        </ListView>
            <!-- Right Column-->
        <Button Name="btnAnzeige" Content="Anzeige Essen" Grid.Column="1" Click="Button_Click" IsEnabled="False" />
    </Grid>
</Window>
```

## Application Logic
```cs
namespace Wpf_Lieferdienst
{
    public partial class MainWindow : Window {

        // Our data:
        List<Food> foods = new List<Food>();

        // Main Method:
        public MainWindow() {
            InitializeComponent();
        }

        // Task are the async "Threads" of C# 
        private async Task RequestDataFromPhp() {
            // make a HTTP request
            HttpClient client = new HttpClient();
            var response = await client.GetAsync("http://localhost/ProjectLieferdienst/essen.php");
            if (response.IsSuccessStatusCode) {
                string json = await response.Content.ReadAsStringAsync();
                foods = JsonConvert.DeserializeObject<List<Food>>(json);
                btnAnzeige.IsEnabled = true;

                listView.DataContext = foods;
            }
        }

        private async void Window_Loaded(object sender, RoutedEventArgs e) {
            // blocks till we have data from our Request:
            await RequestDataFromPhp();
        }

        private void Button_Click(object sender, RoutedEventArgs e) {
            // ItemSource={Binding} in xaml and foods-List get connected:
            listView.DataContext = foods;
        }
    }

    // the wrapper for our Data coming as JSON form the DB/PHP pipeline
    public class Food {
        public int eid { get; set; }
        public string bezeichnung { get; set; }
        public double preis { get; set; }
        public string info { get; set; }
        public string GetPreis => preis.ToString()+" €";

        public override string ToString() {
            string bez = bezeichnung.ToString();
            if (bez.Length > 7) return $"{eid} \t| {bezeichnung}\t| {preis} \t| {info}";
            return $"{eid} \t| {bezeichnung} \t\t| {preis} \t| {info}";
        }
    }
}
```

### Styling
We can add css like Styling to our Application with a Ressourcenverzeichniss (WPF)
- `Dictionary1.xaml`
````xml
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <!-- we define css-like classes for the label: -->
    <Style x:Key="label_food1" TargetType="Label">
        <Setter Property="FontStyle" Value="Italic" />
        <Setter Property="Foreground" Value="Magenta" />
    </Style>
    <!-- and for another type of label -->
    <Style x:Key="label_food2" TargetType="Label">
        <Setter Property="Background" Value="Chartreuse" />
        <Setter Property="Margin" Value="0, 10, 0, 0 " />
    </Style>
</ResourceDictionary>
```

We can then add them to our Labels:
```cs
<Label Content="{Binding bezeichnung}" FontWeight="Bold" FontSize="20" Style="{StaticResource label_food1}"/>
<Label Content="{Binding GetPreis}" Foreground="darkred" FontWeight="Bold" Style="{StaticResource label_food2}" />
```