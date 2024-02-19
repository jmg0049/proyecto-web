<?php
session_start();
$idUsuario = $_SESSION['usuario_id'];

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Usuario";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$campaña1 = isset($_POST['campaña1']) ? $_POST['campaña1'] : '';
$campaña2 = isset($_POST['campaña2']) ? $_POST['campaña2'] : '';
$campaña3 = isset($_POST['campaña3']) ? $_POST['campaña3'] : '';
$campaña4 = isset($_POST['campaña4']) ? $_POST['campaña4'] : '';

if (isset($_SESSION['usuario_id']) && !empty($_SESSION['usuario_id'])) {
    $idUsuario = $_SESSION['usuario_id'];

    $sql = "INSERT INTO campañas (campaña1, campaña2, campaña3, campaña4, id_usuario) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    // Corrección aquí: Asegurarse de que el nombre de la variable coincide
    $stmt->bind_param("ssssi", $campaña1, $campaña2, $campaña3, $campaña4, $idUsuario);

    if ($stmt->execute()) {
        header("Location:Campañas.php"); // Redirección tras la inserción exitosa
        exit;
    } else {
        echo "Error al guardar la campaña: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Error: La sesión del usuario no está configurada correctamente.";
}
?>
