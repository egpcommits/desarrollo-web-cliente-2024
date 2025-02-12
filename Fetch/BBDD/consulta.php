<?php

$HOST="localhost";
$USER="s01afdd4_temporal8";
$PASS="#medac2021#";
$DB="s01afdd4_mobas";

$conexion = new mysqli($HOST,$USER,$PASS,$DB);

if($conexion->connect_errno){
    echo "Fallor: ".$conexion->connect_error;
    exit();
}

$consulta = "SELECT * FROM juegos";
$resultado=$conexion->query($consulta);
$res = $resultado->fetch_all(MYSQLI_ASSOC);

mysqli_close($conexion);

if($resultado){
    echo json_encode($res);
}
else{
    echo json_encode("ERROR consulta");
}

?>