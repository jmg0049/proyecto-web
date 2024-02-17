<?php
session_start();

// Verificar si el usuario está logueado (reemplaza 'usuario_id' con la clave que usas para identificar la sesión de usuario)
if (!isset($_SESSION['usuario_id'])) {
    // Si no hay sesión de usuario, redirigir a iniciar_sesion.php
    header('Location: ./../html/formulario_inicio.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campañas</title>
    <link rel="stylesheet" href="./../css/Campañas.css">
</head>
<body>
    <input type="button" id="Menu" value="Menú" onclick="window.location.href='PaginaInicial.php'">  
    <input type="button" id="Usuario" value="Usuario">
    <select id="usuario" value="usuario" onchange="opcinonesusuario()">
        <option>~~~~~~~~~~~~</option>
        <option value="cambio">Cambiar usuario</option>
        <option value="cerrar">Cerrar sesión</option>
    </select>
    <h3 id="texto">Escribe anotaciones para tus propias campañas.</h3>

    <input type="button" id="guardar1" value="Guardar"><input onclick="mensaje1()" type="button" id="borrar1" value="Borrar">
    <textarea id="Campaña1"></textarea>
    <input type="button" id="guardar2" value="Guardar"><input onclick="mensaje2()" type="button" id="borrar2" value="Borrar">
    <textarea id="Campaña2"></textarea>
    <input type="button" id="guardar3" value="Guardar"><input onclick="mensaje3()" type="button" id="borrar3" value="Borrar">
    <textarea id="Campaña3"></textarea>
    <input type="button" id="guardar4" value="Guardar"><input onclick="mensaje4()" type="button" id="borrar4" value="Borrar">
    <textarea id="Campaña4"></textarea>

    <script src="./../js/Campañas.js" defer></script>
</body>
</html>