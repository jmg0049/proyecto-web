<?php
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
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);

    // Verificar si el correo electrónico ya está registrado
    $sql_check = "SELECT * FROM usuarios WHERE email = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();

    if ($result_check->num_rows > 0) {
        // El correo electrónico ya está registrado
        echo "Error: El correo electrónico ya está registrado.";
        $stmt_check->close();
    } else {
        // El correo electrónico no está registrado, proceder con la inserción
        $sql_insert = "INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)";
        $stmt_insert = $conn->prepare($sql_insert);
        $stmt_insert->bind_param("sss", $nombre, $email, $contraseña);

        if ($stmt_insert->execute()) {
            // Redirigir o hacer algo tras el registro exitoso
             header("Location:/proyecto-web/html/formulario_inicio.html");
             exit();
        } else {
            echo "Error: " . $conn->error;
        }

        // Cerrar declaración insert
        $stmt_insert->close();
    }

    // Cerrar conexión
    $conn->close();
}
?>
