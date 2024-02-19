<?php
session_start();
$idUsuario = $_SESSION['usuario_id'];

// Realiza la conexión a la base de datos (asegúrate de tener los datos de conexión correctos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Usuario"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$raza = isset($_POST['raza']) ? $_POST['raza'] : '';
$genero = isset($_POST['genero']) ? $_POST['genero'] : '';
$clase = isset($_POST['clase']) ? $_POST['clase'] : '';
$color_pelo = isset($_POST['colorpelo']) ? $_POST['colorpelo'] : '';
$color_ropa = isset($_POST['colorropa']) ? $_POST['colorropa'] : '';
$fuerza = isset($_POST['fuerza']) ? $_POST['fuerza'] : '';
$destreza = isset($_POST['destreza']) ? $_POST['destreza'] : '';
$constitucion = isset($_POST['constitucion']) ? $_POST['constitucion'] : '';
$inteligencia = isset($_POST['inteligencia']) ? $_POST['inteligencia'] : '';
$sabiduria = isset($_POST['sabiduria']) ? $_POST['sabiduria'] : '';
$carisma = isset($_POST['carisma']) ? $_POST['carisma'] : '';
$historia = isset($_POST['historia']) ? $_POST['historia'] : '';

// Recoge los valores de las checkboxes
$habilidad1 = isset($_POST['habilidad1']) ? 1 : 0;
$habilidad2 = isset($_POST['habilidad2']) ? 1 : 0;
$habilidad3 = isset($_POST['habilidad3']) ? 1 : 0;
$habilidad4 = isset($_POST['habilidad4']) ? 1 : 0;
$habilidad5 = isset($_POST['habilidad5']) ? 1 : 0;
$habilidad6 = isset($_POST['habilidad6']) ? 1 : 0;
$habilidad7 = isset($_POST['habilidad7']) ? 1 : 0;
$habilidad8 = isset($_POST['habilidad8']) ? 1 : 0;
$habilidad9 = isset($_POST['habilidad9']) ? 1 : 0;
$habilidad10 = isset($_POST['habilidad10']) ? 1 : 0;
$habilidad11 = isset($_POST['habilidad11']) ? 1 : 0;
$habilidad12 = isset($_POST['habilidad12']) ? 1 : 0;
$habilidad13 = isset($_POST['habilidad13']) ? 1 : 0;
$habilidad14 = isset($_POST['habilidad14']) ? 1 : 0;
$habilidad15 = isset($_POST['habilidad15']) ? 1 : 0;

//Recoge url de la imagen
$imagenPersonaje=  isset($_POST['imagenPersonaje']) ? $_POST['imagenPersonaje'] : '';

if (isset($_SESSION['usuario_id']) && !empty($_SESSION['usuario_id'])) {
    $idUsuario = $_SESSION['usuario_id'];   
    print_r($_SESSION);

    // Resto del código de inserción del personaje...
} else {
    echo "Error: La sesión del usuario no está configurada correctamente.";
}

$sql = "INSERT INTO personajes (nombre, raza, genero, clase, color_pelo, color_ropa, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma, historia, id_usuario, Furia, Ataque_circular, Resistencia, Golpe_Maestro, Meditacion, Bola_fuego, Disparo_escarcha, Relampago, Telequinesis, Sanacion, Disparo_centrado, Sombra, Puñalada, Robo, Agilidad, imagenPersonaje) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssiiiiiisiiiiiiiiiiiiiiiis", $nombre, $raza, $genero, $clase, $color_pelo, $color_ropa, $fuerza, $destreza, $constitucion, $inteligencia, $sabiduria, $carisma, $historia, $idUsuario, $habilidad1, $habilidad2, $habilidad3, $habilidad4, $habilidad5, $habilidad6, $habilidad7, $habilidad8, $habilidad9, $habilidad10, $habilidad11, $habilidad12, $habilidad13, $habilidad14, $habilidad15, $imagenPersonaje);


if ($stmt->execute()) {
    header("Location:PaginaInicial.php"); //Aqui es para poner la pagina donde quiero que vaya cuando inicie sesion
    exit;
} else {
    echo "Error al guardar el personaje: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
