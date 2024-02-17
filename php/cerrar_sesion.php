<?php
session_start(); // Iniciar la sesión

// Destruir todas las variables de sesión.
$_SESSION = array();

// Si se desea destruir completamente la sesión, borra también la cookie de sesión.
// Esto hará que se requiera el reingreso de inicio de sesión.
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finalmente, destruir la sesión.
session_destroy();

// Redirigir al usuario a la página de inicio de sesión o a la página principal
header('Location: /proyecto-web/php/PaginaInicial.php'); // Ajusta el nombre del archivo según sea necesario
exit();
?>
