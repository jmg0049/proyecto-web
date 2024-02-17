<?php
session_start();
// Configurar los datos de conexión al servidor de base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Usuario";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Verificar las credenciales del usuario
    $sql = "SELECT id, nombre, contraseña FROM usuarios WHERE email = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($id, $nombre, $hashed_contraseña);

    if ($stmt->fetch() && password_verify($contraseña, $hashed_contraseña)) {
        echo "Inicio de sesión exitoso";
        session_start();
        $_SESSION['usuario_id'] = $id;
       header("Location: PaginaInicial.php"); //Aqui es para poner la pagina donde quiero que vaya cuando inicie sesion
       exit;
    } else {
        echo "Inicio de sesión fallido. Por favor, verifica tus credenciales.";
        
    }

    // Cerrar consulta
    $stmt->close();
}

// Cerrar conexión
$conn->close();
?>
