<?php


header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir los datos del formulario
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $imagen = isset($_POST['imagen']) ? $_POST['imagen'] : '';
    $descripcion = isset($_POST['desc']) ? $_POST['desc'] : '';

    // Crear una respuesta en un array asociativo
    $respuesta = [
        'status' => "Ha pasado por el servidor",
        'mensaje' => "Datos recibidos correctamente",
        'datos' => [
            'nombre' => $nombre,
            'imagen' => $imagen,
            'descripcion' => $descripcion
        ]
    ];
} else {
    // Respuesta si no se recibió una petición POST
    $respuesta = [
        'status' => 'error',
        'mensaje' => 'El POST va vacío'
    ];
}


echo json_encode($respuesta);
exit;


?>