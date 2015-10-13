<?php

$link = mysql_connect('localhost','root','raspberry','contacts');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';


//$sql = "CREATE TABLE MyGuests (
//firstname VARCHAR(30) NOT NULL,
//email VARCHAR(50),
//comments VARCHAR(30) NOT NULL,
//reg_date TIMESTAMP
//)";
$result = mysql_select_db("contacts", $link) or die("Could not connect to MYSQL table.");
$name = $_POST["name"]; 
$email = $_POST["mailid"]; 
$comments = $_POST["comments"]; 
echo $name,$email,$comments;
$result = mysql_query("insert into MyGuests values('$name','$email','$comments')");

$result1 = mysql_query("select * from MyGuests");
//echo $result,$result1;

//if ($link->query($sql) === TRUE) {
//    echo "Table MyGuests created successfully";
//} else {
//    echo "Error creating table: " . $link->error;
//}

?>
