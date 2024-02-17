<?php
// Definir los datos de conexión
$servername = "localhost";
$username = "root";
$password = "";
$database = "usuario"; 

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Realizar la consulta SQL
$sql_select_clase = "SELECT clase FROM personajes";
$result = $conn->query($sql_select_clase);

// Inicializar un array para almacenar los tipos de personajes
$tipoPersonajes = array();

// Verificar si hay filas devueltas por la consulta
if ($result->num_rows > 0) {
    // Recorrer las filas y almacenar cada tipo de personaje en el array
    while ($row = $result->fetch_assoc()) {
        $tipoPersonajes[] = $row["clase"];
    }
} else {
    echo "0 resultados";
}

// Contar la cantidad de cada tipo de personaje

$conteo = array_count_values($tipoPersonajes);

$guerreros = $conteo['Guerrero'] ?? 0;
$picaros = $conteo['Picaro'] ?? 0;
$mago = $conteo['Mago'] ?? 0;



setcookie("datos", $guerreros, time() + (86400 * 30), "/");
setcookie("datos2", $picaros, time() + (86400 * 30), "/");
setcookie("datos3", $mago, time() + (86400 * 30), "/");


// cierra la conexion
$conn->close();
?>