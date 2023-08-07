"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[8461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return t?i.createElement(m,l(l({ref:n},c),{},{components:t})):i.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={},l="Erweiterung der bestehenden App",o={unversionedId:"fiae/Programmierung/CSharp/Projekt/day2",id:"fiae/Programmierung/CSharp/Projekt/day2",title:"Erweiterung der bestehenden App",description:"Adding requironments to the existing Project.",source:"@site/docs/fiae/Programmierung/CSharp/Projekt/day2.md",sourceDirName:"fiae/Programmierung/CSharp/Projekt",slug:"/fiae/Programmierung/CSharp/Projekt/day2",permalink:"/md/fiae/Programmierung/CSharp/Projekt/day2",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/CSharp/Projekt/day2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projekt ereignisgesteuerte App in Csharp",permalink:"/md/fiae/Programmierung/CSharp/Projekt/day1"},next:{title:"Grundlagen in C`#`",permalink:"/md/fiae/Programmierung/CSharp/basics"}},d={},s=[{value:"Adding Preview Pictures",id:"adding-preview-pictures",level:2},{value:"Update the DB",id:"update-the-db",level:3},{value:"Update the php middleware",id:"update-the-php-middleware",level:3},{value:"Update the Csharp App",id:"update-the-csharp-app",level:3},{value:"Bestellvorgang",id:"bestellvorgang",level:2},{value:"Update the DB again",id:"update-the-db-again",level:3},{value:"Create a new PHP endpoint",id:"create-a-new-php-endpoint",level:3},{value:"Csharp Application",id:"csharp-application",level:3},{value:"Double Click",id:"double-click",level:4},{value:"Add a new window:",id:"add-a-new-window",level:4}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erweiterung-der-bestehenden-app"},"Erweiterung der bestehenden App"),(0,r.kt)("p",null,"Adding requironments to the existing Project. "),(0,r.kt)("h2",{id:"adding-preview-pictures"},"Adding Preview Pictures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pictures (hosted on our apache server should get added to preview the Menu-items)")),(0,r.kt)("h3",{id:"update-the-db"},"Update the DB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'alter table essen add bild varchar(100);\nupdate essen set bild="http://localhost/Bilder/pizza.jpg" where eid=1;\nupdate essen set bild="http://localhost/Bilder/pizza.jpg" where eid=2;\nupdate essen set bild="http://localhost/Bilder/bulette.jpg" where eid=3;\nupdate essen set bild="http://localhost/Bilder/gemuese.jpg" where eid=4;\nupdate essen set bild="http://localhost/Bilder/creme.jpg" where eid=5;\n')),(0,r.kt)("h3",{id:"update-the-php-middleware"},"Update the php middleware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we add the new field to the request and disable the escaping of the ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," in the json encoding.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$request = "SELECT eid, bezeichnung, preis, info, bild FROM essen";\n$text = json_encode($data, JSON_UNESCAPED_SLASHES);\n')),(0,r.kt)("h3",{id:"update-the-csharp-app"},"Update the Csharp App"),(0,r.kt)("p",null,"we use 2 Stack Panels to divide space horizontally and vertically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<StackPanel Orientation="Horizontal">\n    <Image Source="{Binding bild}" Width="100" />\n    <StackPanel Orientation="Vertical">\n        <Label Content="{Binding bezeichnung}" FontWeight="Bold" FontSize="20" Style="{StaticResource label_food1}" />\n        <Label Content="{Binding GetPreis}" Foreground="darkred" FontWeight="Bold" Style="{StaticResource label_food2}" />\n        <Label Content="{Binding info}" Foreground="green" ContentStringFormat="{} infos:{0}" />\n    </StackPanel>\n</StackPanel>\n')),(0,r.kt)("h2",{id:"bestellvorgang"},"Bestellvorgang"),(0,r.kt)("h3",{id:"update-the-db-again"},"Update the DB again"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- ... ontop of previous \nCREATE TABLE bestellung (\n    bid INT AUTO_INCREMENT PRIMARY KEY,\n    datum DATETIME,\n    eid INT NOT NULL,\n    anzahl INT UNSIGNED,\n    FOREIGN KEY (eid) REFERENCES essen (eid)\n);\n-- mokup data for a previous example order\nINSERT INTO bestellung (datum, eid, anzahl) values (now(), 2 , 3);\n-- grant our user access to the new table:\nGRANT SELECT,INSERT ON lieferdienst.bestellung TO ronny@localhost;\n")),(0,r.kt)("h3",{id:"create-a-new-php-endpoint"},"Create a new PHP endpoint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To avoid SQL-Injection we use the ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," Placeholders instead of direct values.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    // TODO: add incoming data from Csharp App instead of fixed example values\n    $eid = 2;\n    $anzahl = 3;\n\n    // Connect to the DB-Server\n    $db = new mysqli("localhost", "ronny", "1234", "lieferdienst");\n\n    // define the SQL reuqest - we use the ? syntax to get request the ypes so we can validate them:\n    $request = "INSERT INTO bestellung (datum, eid, anzahl) VALUES (now(), ?, ?)";\n    $insert = $db->prepare($request);\n    $insert->bind_param("ii", $eid, $anzahl);\n    $insert->execute();\n    // so we can check for successful requests in our Csharp App. Will return nr-of affected rows:\n    print mysqli_affected_rows($db);    \n    $db->close();\n')),(0,r.kt)("h3",{id:"csharp-application"},"Csharp Application"),(0,r.kt)("h4",{id:"double-click"},"Double Click"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ad the Event Handler for the double click on a list element")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<ListView Grid.Column="0" Name="listView" ItemsSource="{Binding}" MouseDoubleClick="listView_MouseDoubleClick">\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"and add logic to it in  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"")),(0,r.kt)("h4",{id:"add-a-new-window"},"Add a new window:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hinzuf\xfcgen -> Fenster(Wpf) -> FensterBestellen.xaml")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the corresponding FensterBestellen.cs we change the constructor"),(0,r.kt)("li",{parentName:"ul"},"the FensterBestellen.xaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'<Grid>\n    <Grid.ColumnDefinitions>\n            \x3c!-- 2 columnds, both same width--\x3e\n        <ColumnDefinition Width="*" />\n        <ColumnDefinition Width="*" />\n    </Grid.ColumnDefinitions>\n    <Grid.RowDefinitions>\n        \x3c!-- 1 big row 40% rest split evenly in 4 more rows each 15% height--\x3e\n        <RowDefinition Height="40*" />\n        <RowDefinition Height="15*" />\n        <RowDefinition Height="15*" />\n        <RowDefinition Height="15*" />\n        <RowDefinition Height="15*" />\n    </Grid.RowDefinitions>\n    \x3c!-- Grid.Colum points directly to one Column. With Grid.ColumnSpan we can add 2 Columns together (since its only 2 here we dont have to (start>end) --\x3e\n    \x3c!-- 1 element per row each --\x3e\n    <Image Source="{Binding bild}" Width="300" Grid.ColumnSpan="2" Grid.Row="0" HorizontalAlignment="Center" />\n    <Label Content="{Binding bezeichnung}" Grid.ColumnSpan="2" Grid.Row="1" HorizontalAlignment="Center" />\n    <Label Content="{Binding GetPreis}" Grid.ColumnSpan="2" Grid.Row="2" HorizontalAlignment="Center" />\n    \x3c!-- 2 elements per row --\x3e\n    <Label Content="Anzahl:" Grid.Column="0" Grid.Row="3" HorizontalAlignment="Right" VerticalAlignment="Center" />\n    <TextBox Name="txtAnzahl" Text="1" Grid.Column="1" Grid.Row="3" HorizontalAlignment="Left" Width="100" VerticalAlignment="Center"/>\n    \x3c!-- 2 elements per row --\x3e\n    <Button Click="btnCancel_Click" Content="Abbrechen" Name="btnCancel" Grid.Column="0" Grid.Row="4" HorizontalAlignment="Center" VerticalAlignment="Center" />\n    <Button Click="btnOk_Click" Content="Bestellen" Name="btnOk" Grid.Column="1" Grid.Row="4" HorizontalAlignment="Center" VerticalAlignment="Center" />\n</Grid>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the FensterBestellen.cs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'\npublic partial class FensterBestellen : Window\n{\n    Food curWindowChoice;\n    public FensterBestellen(Food choice)\n    {\n        InitializeComponent();\n        // bind this Window to choice\n        this.DataContext = choice;\n        this.curWindowChoice = choice;\n    }\n\n    private void btnCancel_Click(object sender, RoutedEventArgs e)\n    {\n        closeWindow(false);\n    }\n\n    private async void btnOk_Click(object sender, RoutedEventArgs e)\n    {\n        // parse the count\n        bool isValid = uint.TryParse(txtAnzahl.Text, out uint anzahl);\n        if (!isValid){\n            closeWindow(false);\n            return;\n        }\n        // we create a tempory anonimous object\n        var data = new {curWindowChoice.eid, anzahl};\n        // make it a json string\n        string json = JsonConvert.SerializeObject(data);\n        // build a request:\n        HttpContent content = new StringContent(json);\n        // make a Post Request to our pho server:\n        HttpClient client = new HttpClient();\n        await client.PostAsync("http://localhost/ProjectLieferdienst/bestellen.php", content);\n\n        MessageBox.Show(json);\n        closeWindow(true);\n    }\n\n    private void closeWindow(bool result)\n    {\n        // we set the result-status we can check for in our main-window.\n        this.DialogResult = result;\n        // we manually close the window\n        this.Close();\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"at in the main we add the click event to create the new Window:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'\nprivate void Button_Click(object sender, RoutedEventArgs e)\n{\n    // ItemSource={Binding} in xaml and foods-List get connected:\n    listView.DataContext = foods;\n}\n\nprivate void listView_MouseDoubleClick(object sender, MouseButtonEventArgs e)\n{\n    Food choice = listView.SelectedValue as Food;\n\n    // We create the new FensterBestellen\n    FensterBestellen window = new FensterBestellen(choice);\n    // ShowDialog() blocks the current window till it is closed. Show() does not.\n    // we check for the result coming from the FensterBestellen.DialogResult\n    bool? result = window.ShowDialog();\n    if (result == true)\n        MessageBox.Show("Vielen Dank f\xfcr ihre bestellung");\n    else if (result == false)\n        MessageBox.Show("some other close (taskmanger/crash etc)");\n    else\n        MessageBox.Show("Clicked Cancel");\n}\n')))}u.isMDXComponent=!0}}]);