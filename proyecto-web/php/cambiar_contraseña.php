<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $newPassword = password_hash($_POST["newPassword"], PASSWORD_DEFAULT); // Asegúrate de usar password_hash

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

    // SQL para actualizar la contraseña
    $sql = "UPDATE usuarios SET contraseña = ? WHERE email = ?";

    // Preparar y vincular
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $newPassword, $email);

    // Ejecutar
    if ($stmt->execute()) {
        // Redirigir al usuario a 'formulario_inicio.html'
        header("Location: formulario_inicio.html");
        exit;
    } else {
        // Si hay un error, se mostrará el mensaje
        echo "Error al actualizar la contraseña: " . $stmt->error;
    }

    // Cerrar conexión
    $stmt->close();
    $conn->close();
}
?>
