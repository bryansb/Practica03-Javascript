<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulario Resultado</title>
</head>
<body>
   
<?php

   $names = $_POST["nombres"];
   $lastNames = $_POST["apellidos"];

   print "Bienvenido, " . $lastNames . " ". $names . ", pasaste las validaciones!";

?>

</body>
</html>