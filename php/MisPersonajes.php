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
    <title>Mis Personajes</title>
    <link rel="stylesheet" href="./../css/MisPersonajes.css">
</head>
<body>
    
    <div class="Filtro">
   <input type="button" value="Menú" id="Menu" onclick="window.location.href='PaginaInicial.php'">
    <input type="button" value="Usuario" id="Usuario">
    <select id="usuario" value="usuario" onchange="opcinonesusuario()">
        <option>~~~~~~~~~~~~</option>
        <option value="cambio">Cambiar usuario</option>
        <option value="cerrar">Cerrar sesión</option>
    </select>
        
        <div id="humano"><input type="checkbox"><b>Humano</b></div> 
        <div id="elfo"><input type="checkbox"><b>Elfo</b></div> 
        <div id="enano"><input type="checkbox"><b>Enano</b></div> 
        <div id="hombre"><input type="checkbox"><b>Hombre</b></div>

        <div id="guerrero"><input type="checkbox"><b>Guerrero</b></div> 
        <div id="mago"><input type="checkbox"><b>Mago</div> 
        <div id="picaro"><input type="checkbox"><b>Pícaro</b></div> 
        <div id="mujer"><input type="checkbox"><b>Mujer</b></div>
    </div>

    <div id="Personaje1">
        <label id="nombre1">Nombre</label>
        <img id="Dibujo1" src="./../imagenes/Humano Guerrero 1A.png">
        <input type="button" value="Ver" id="ver1">
        <input type="button" value="Editar" id="editar1">
    </div>
    <div id="Personaje2">
        <label id="nombre2">Nombre</label>
        <img id="Dibujo2" src="./../imagenes/Humano Guerrero 1B.png">
        <input type="button" value="Ver" id="ver2">
        <input type="button" value="Editar" id="editar2">
    </div>
    <div id="Personaje3">
        <label id="nombre3">Nombre</label>
        <img id="Dibujo3" src="./../imagenes/Humano Guerrero 1C.png">
        <input type="button" value="Ver" id="ver3">
        <input type="button" value="Editar" id="editar3">
    </div>
    <div id="Personaje4">
        <label id="nombre4">Nombre</label>
        <img id="Dibujo4" src="./../imagenes/Humano Guerrero 1D.png">
        <input type="button" value="Ver" id="ver4">
        <input type="button" value="Editar" id="editar4">
    </div>
    <div id="Personaje5">
        <label id="nombre5">Nombre</label>
        <img id="Dibujo5" src="./../imagenes/Humano Guerrero 2A.png">
        <input type="button" value="Ver" id="ver5">
        <input type="button" value="Editar" id="editar5">
    </div>
    <div id="Personaje6">
        <label id="nombre6">Nombre</label>
        <img id="Dibujo6" src="./../imagenes/Humano Guerrero 2B.png">
        <input type="button" value="Ver" id="ver6">
        <input type="button" value="Editar" id="editar6">
    </div>
    <div id="Personaje7">
        <label id="nombre7">Nombre</label>
        <img id="Dibujo7" src="./../imagenes/Humano Guerrero 2C.png">
        <input type="button" value="Ver" id="ver7">
        <input type="button" value="Editar" id="editar7">
    </div>
    <div id="Personaje8">
        <label id="nombre8">Nombre</label>
        <img id="Dibujo8" src="./../imagenes/Humano Guerrero 2D.png">
        <input type="button" value="Ver" id="ver8">
        <input type="button" value="Editar" id="editar8">
    </div>
    <div id="Personaje9">
        <label id="nombre9">Nombre</label>
        <img id="Dibujo9" src="./../imagenes/Humano Guerrero 3A.png">
        <input type="button" value="Ver" id="ver9">
        <input type="button" value="Editar" id="editar9">
    </div>
    <div id="Personaje10">
        <label id="nombre10">Nombre</label>
        <img id="Dibujo10" src="./../imagenes/Humano Guerrero 3B.png">
        <input type="button" value="Ver" id="ver10">
        <input type="button" value="Editar" id="editar10">
    </div>
    <div id="Personaje11">
        <label id="nombre11">Nombre</label>
        <img id="Dibujo11" src="./../imagenes/Humano Guerrero 3C.png">
        <input type="button" value="Ver" id="ver11">
        <input type="button" value="Editar" id="editar11">
    </div>
    <div id="Personaje12">
        <label id="nombre12">Nombre</label>
        <img id="Dibujo12" src="./../imagenes/Humano Guerrero 3D.png">
        <input type="button" value="Ver" id="ver12">
        <input type="button" value="Editar" id="editar12">
    </div>   
    
    <script src="./../js/MisPersonajes.js"></script>
</body>
</html>