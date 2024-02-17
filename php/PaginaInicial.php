<?php
session_start();
// Luego, al procesar la creación del personaje, usa la ID del usuario desde la sesión
if(isset($_SESSION['usuario_id'])) {
    $idUsuario = $_SESSION['usuario_id'];
} else {
    // Asignar un valor predeterminado o manejar la falta de la clave como sea necesario
    $idUsuario = null; // Por ejemplo, asignar null
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./../css/PaginaInicial.css">
    <title>Menú</title>
</head>
<body>
    <input type="button" id="Usuario" value="Usuario">
    <select id="usuario" value="usuario" onchange="opcinonesusuario()">
        <option>~~~~~~~~~~~~</option>
        <option value="cambio">Cambiar usuario</option>
        <option value="cerrar">Cerrar sesión</option>
    </select>

    <input type="button" id="Crear" value="Crear Personaje" onclick="window.location.href='CrearPersonaje.php'">
    <input type="button" id="Lista" value="Mis Personajes" onclick="window.location.href='MisPersonajes.php'">
    <input type="button" id="Campañas" value="Campañas" onclick="window.location.href='Campañas.php'">
    <script src="./../js/PaginaInicial.js">
    </script>
</body>
</html>