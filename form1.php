<html>
<head> 
<style>
div.box{
color:white;
font-size:50;
font-style:bold;
border-top-right-radius:50px;
border-bottom-left-radius:50px;
border-top-left-radius:10px;
border-bottom-right-radius:10px;
font-family:"papyrus",arial,'sans serif'; 
}
div.input{
font-family:"papyrus",arial;
}
</style>
<link rel ="stylesheet" herf="indexstyle.css" type="text/css" >

</head>
<body style =  "background:linear-gradient(90deg,#5D4157 2%,#A8CABA 50%,white" >
<div class="box">
<?php echo "<h2 align = center>Welcome to Raspberry pi 2</h2>" ?>
</div>
<div>
<form action="form.php" method="post">
<table class = "input" align = center>
<tr>
<td>
<div class = "input">
Enter your name:
<input type="text" name="inp" placeholder="Enter name"> 
</div>
</td>
<td>
<input type="submit" value="Submit" >
</tr>
</table>
</form>
</div>
</body>
</html>
