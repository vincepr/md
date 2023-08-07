# Erweiterung der bestehenden App

Adding requironments to the existing Project. 

## Adding Preview Pictures
- Pictures (hosted on our apache server should get added to preview the Menu-items)

### Update the DB
```sql
alter table essen add bild varchar(100);
update essen set bild="http://localhost/Bilder/pizza.jpg" where eid=1;
update essen set bild="http://localhost/Bilder/pizza.jpg" where eid=2;
update essen set bild="http://localhost/Bilder/bulette.jpg" where eid=3;
update essen set bild="http://localhost/Bilder/gemuese.jpg" where eid=4;
update essen set bild="http://localhost/Bilder/creme.jpg" where eid=5;
```

### Update the php middleware
- we add the new field to the request and disable the escaping of the `/` in the json encoding.
```php
$request = "SELECT eid, bezeichnung, preis, info, bild FROM essen";
$text = json_encode($data, JSON_UNESCAPED_SLASHES);
```

### Update the Csharp App
we use 2 Stack Panels to divide space horizontally and vertically.
```xml
<StackPanel Orientation="Horizontal">
    <Image Source="{Binding bild}" Width="100" />
    <StackPanel Orientation="Vertical">
        <Label Content="{Binding bezeichnung}" FontWeight="Bold" FontSize="20" Style="{StaticResource label_food1}" />
        <Label Content="{Binding GetPreis}" Foreground="darkred" FontWeight="Bold" Style="{StaticResource label_food2}" />
        <Label Content="{Binding info}" Foreground="green" ContentStringFormat="{} infos:{0}" />
    </StackPanel>
</StackPanel>
```

## Bestellvorgang
### Update the DB again
```sql
-- ... ontop of previous 
CREATE TABLE bestellung (
    bid INT AUTO_INCREMENT PRIMARY KEY,
    datum DATETIME,
    eid INT NOT NULL,
    anzahl INT UNSIGNED,
    FOREIGN KEY (eid) REFERENCES essen (eid)
);
-- mokup data for a previous example order
INSERT INTO bestellung (datum, eid, anzahl) values (now(), 2 , 3);
-- grant our user access to the new table:
GRANT SELECT,INSERT ON lieferdienst.bestellung TO ronny@localhost;
```
### Create a new PHP endpoint
- To avoid SQL-Injection we use the `?` Placeholders instead of direct values.

```php
    // TODO: add incoming data from Csharp App instead of fixed example values
    $eid = 2;
    $anzahl = 3;

    // Connect to the DB-Server
    $db = new mysqli("localhost", "ronny", "1234", "lieferdienst");

    // define the SQL reuqest - we use the ? syntax to get request the ypes so we can validate them:
    $request = "INSERT INTO bestellung (datum, eid, anzahl) VALUES (now(), ?, ?)";
    $insert = $db->prepare($request);
    $insert->bind_param("ii", $eid, $anzahl);
    $insert->execute();
    // so we can check for successful requests in our Csharp App. Will return nr-of affected rows:
    print mysqli_affected_rows($db);    
    $db->close();
```
### Csharp Application
#### Double Click
- ad the Event Handler for the double click on a list element
```xml
<ListView Grid.Column="0" Name="listView" ItemsSource="{Binding}" MouseDoubleClick="listView_MouseDoubleClick">
```
- and add logic to it in  
```cs

```
#### Add a new window:
`Hinzufügen -> Fenster(Wpf) -> FensterBestellen.xaml`
- in the corresponding FensterBestellen.cs we change the constructor
- the FensterBestellen.xaml
```cs
<Grid>
    <Grid.ColumnDefinitions>
            <!-- 2 columnds, both same width-->
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
    </Grid.ColumnDefinitions>
    <Grid.RowDefinitions>
        <!-- 1 big row 40% rest split evenly in 4 more rows each 15% height-->
        <RowDefinition Height="40*" />
        <RowDefinition Height="15*" />
        <RowDefinition Height="15*" />
        <RowDefinition Height="15*" />
        <RowDefinition Height="15*" />
    </Grid.RowDefinitions>
    <!-- Grid.Colum points directly to one Column. With Grid.ColumnSpan we can add 2 Columns together (since its only 2 here we dont have to (start>end) -->
    <!-- 1 element per row each -->
    <Image Source="{Binding bild}" Width="300" Grid.ColumnSpan="2" Grid.Row="0" HorizontalAlignment="Center" />
    <Label Content="{Binding bezeichnung}" Grid.ColumnSpan="2" Grid.Row="1" HorizontalAlignment="Center" />
    <Label Content="{Binding GetPreis}" Grid.ColumnSpan="2" Grid.Row="2" HorizontalAlignment="Center" />
    <!-- 2 elements per row -->
    <Label Content="Anzahl:" Grid.Column="0" Grid.Row="3" HorizontalAlignment="Right" VerticalAlignment="Center" />
    <TextBox Name="txtAnzahl" Text="1" Grid.Column="1" Grid.Row="3" HorizontalAlignment="Left" Width="100" VerticalAlignment="Center"/>
    <!-- 2 elements per row -->
    <Button Click="btnCancel_Click" Content="Abbrechen" Name="btnCancel" Grid.Column="0" Grid.Row="4" HorizontalAlignment="Center" VerticalAlignment="Center" />
    <Button Click="btnOk_Click" Content="Bestellen" Name="btnOk" Grid.Column="1" Grid.Row="4" HorizontalAlignment="Center" VerticalAlignment="Center" />
</Grid>
```

- the FensterBestellen.cs
```cs

public partial class FensterBestellen : Window
{
    Food curWindowChoice;
    public FensterBestellen(Food choice)
    {
        InitializeComponent();
        // bind this Window to choice
        this.DataContext = choice;
        this.curWindowChoice = choice;
    }

    private void btnCancel_Click(object sender, RoutedEventArgs e)
    {
        closeWindow(false);
    }

    private async void btnOk_Click(object sender, RoutedEventArgs e)
    {
        // parse the count
        bool isValid = uint.TryParse(txtAnzahl.Text, out uint anzahl);
        if (!isValid){
            closeWindow(false);
            return;
        }
        // we create a tempory anonimous object
        var data = new {curWindowChoice.eid, anzahl};
        // make it a json string
        string json = JsonConvert.SerializeObject(data);
        // build a request:
        HttpContent content = new StringContent(json);
        // make a Post Request to our pho server:
        HttpClient client = new HttpClient();
        await client.PostAsync("http://localhost/ProjectLieferdienst/bestellen.php", content);

        MessageBox.Show(json);
        closeWindow(true);
    }

    private void closeWindow(bool result)
    {
        // we set the result-status we can check for in our main-window.
        this.DialogResult = result;
        // we manually close the window
        this.Close();
    }
}
```

- at in the main we add the click event to create the new Window:

```cs

private void Button_Click(object sender, RoutedEventArgs e)
{
    // ItemSource={Binding} in xaml and foods-List get connected:
    listView.DataContext = foods;
}

private void listView_MouseDoubleClick(object sender, MouseButtonEventArgs e)
{
    Food choice = listView.SelectedValue as Food;

    // We create the new FensterBestellen
    FensterBestellen window = new FensterBestellen(choice);
    // ShowDialog() blocks the current window till it is closed. Show() does not.
    // we check for the result coming from the FensterBestellen.DialogResult
    bool? result = window.ShowDialog();
    if (result == true)
        MessageBox.Show("Vielen Dank für ihre bestellung");
    else if (result == false)
        MessageBox.Show("some other close (taskmanger/crash etc)");
    else
        MessageBox.Show("Clicked Cancel");
}
```