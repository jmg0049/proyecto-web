<?php
session_start();
// Realiza la conexión a la base de datos (asegúrate de tener los datos de conexión correctos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Usuario"; // Nombre de la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si el usuario está logueado (reemplaza 'usuario_id' con la clave que usas para identificar la sesión de usuario)
if (!isset($_SESSION['usuario_id'])) {
    // Si no hay sesión de usuario, redirigir a iniciar_sesion.php
    header('Location: ./../html/formulario_inicio.html');
    exit();
}
$id = $_SESSION['usuario_id'];
// Consulta SQL para obtener la ruta de la imagen y el nombre
$consulta = "SELECT imagenPersonaje FROM personajes WHERE id_usuario = $id";
$consulta2 = "SELECT nombre FROM personajes WHERE id_usuario = $id";
$resultado = mysqli_query($conn, $consulta);
$resultado2 = mysqli_query($conn, $consulta2 );

if ($resultado && mysqli_num_rows($resultado) > 0) {
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen = $fila['imagenPersonaje'];
    
   
} else {
    echo "No hay personaje creado.";
    exit;
}
if ($resultado2 && mysqli_num_rows($resultado2) > 0) {
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje = $fila2['nombre'];
    // Cierra la conexión a la base de datos
    mysqli_close($conn);
} else {
    echo "Error al obtener el nombre desde la base de datos.";
    exit;
}

/*foreach ($_SESSION as $key=>$value)
{
    echo($GLOBALS[$key]);
}*/
// echo($_SESSION['usuario_id']);"<br>";

//voy a recorrer $resultado
$rutaImagen1 = '';
$rutaImagen2 = '';
$rutaImagen3 = '';
$rutaImagen4 = '';
$rutaImagen5 = '';
$rutaImagen6 = '';


if ($resultado && mysqli_num_rows($resultado) >= 1) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado, 0);
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen1 = $fila['imagenPersonaje'];
}

if ($resultado && mysqli_num_rows($resultado) >= 2) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado, 1);
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen2 = $fila['imagenPersonaje'];
}

if ($resultado && mysqli_num_rows($resultado) >= 3) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado, 2);
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen3 = $fila['imagenPersonaje'];
}
if ($resultado && mysqli_num_rows($resultado) >= 4) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado, 3);
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen4 = $fila['imagenPersonaje'];
}
if ($resultado && mysqli_num_rows($resultado) >= 5) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado, 4);
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen5 = $fila['imagenPersonaje'];
}
if ($resultado && mysqli_num_rows($resultado) >= 6) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado, 5);
    $fila = mysqli_fetch_assoc($resultado);
    $rutaImagen6 = $fila['imagenPersonaje'];
}
//voy a recorrer $resultado2
$nombrePersonaje1 = '';
$nombrePersonaje2 = '';
$nombrePersonaje3 = '';
$nombrePersonaje4 = '';
$nombrePersonaje5 = '';
$nombrePersonaje6 = '';

if ($resultado2 && mysqli_num_rows($resultado2) >= 1) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado2, 0);
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje1 = $fila2['nombre'];
}
if ($resultado2 && mysqli_num_rows($resultado2) >= 2) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado2, 1);
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje2 = $fila2['nombre'];
}
if ($resultado2 && mysqli_num_rows($resultado2) >= 3) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado2, 2);
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje3 = $fila2['nombre'];
}
if ($resultado2 && mysqli_num_rows($resultado2) >= 4) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado2, 3);
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje4 = $fila2['nombre'];
}
if ($resultado2 && mysqli_num_rows($resultado2) >= 5) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado2, 4);
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje5 = $fila2['nombre'];
}
if ($resultado2 && mysqli_num_rows($resultado2) >= 6) {
    // Mueve el puntero del resultado a la tercera fila
    mysqli_data_seek($resultado2, 5);
    $fila2 = mysqli_fetch_assoc($resultado2);
    $nombrePersonaje6 = $fila2['nombre'];
}



/*
echo $rutaImagen1;"<br>";
echo $rutaImagen2;"<br>";
echo $rutaImagen3;
*/
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
    </div>

    <div id="Personaje1">
    <label id="nombre1"></label>
    <script>
        var nombrePersonaje1 = "<?php echo $nombrePersonaje1; ?>";
        document.getElementById("nombre1").textContent = nombrePersonaje1;
    </script>
        <img id="Dibujo1" src="<?php echo $rutaImagen1; ?>" alt="Imagen del personaje 1">
    </div>
    <div id="Personaje2">
    <label id="nombre2"></label>
    <script>
        var nombrePersonaje2 = "<?php echo $nombrePersonaje2; ?>";
        document.getElementById("nombre2").textContent = nombrePersonaje2;
    </script>
        <img id="Dibujo2" src="<?php echo $rutaImagen2; ?>"alt="Imagen del personaje 2">
    </div>
    <div id="Personaje3">
    <label id="nombre3"></label>
    <script>
        var nombrePersonaje3 = "<?php echo $nombrePersonaje3; ?>";
        document.getElementById("nombre3").textContent = nombrePersonaje3;
    </script>
        <img id="Dibujo3" src="<?php echo $rutaImagen3; ?>"alt="Imagen del personaje 3">
    </div>
    <div id="Personaje4">
    <label id="nombre4"></label>
    <script>
        var nombrePersonaje4 = "<?php echo $nombrePersonaje4; ?>";
        document.getElementById("nombre4").textContent = nombrePersonaje4;
    </script>
        <img id="Dibujo4"src="<?php echo $rutaImagen4; ?>">
    </div>
    <div id="Personaje5">
    <label id="nombre5"></label>
    <script>
        var nombrePersonaje5 = "<?php echo $nombrePersonaje5; ?>";
        document.getElementById("nombre5").textContent = nombrePersonaje5;
    </script>
        <img id="Dibujo5" src="<?php echo $rutaImagen5; ?>">
    </div>
    <div id="Personaje6">
    <label id="nombre6"></label>
    <script>
        var nombrePersonaje6 = "<?php echo $nombrePersonaje6; ?>";
        document.getElementById("nombre6").textContent = nombrePersonaje6;
    </script>
        <img id="Dibujo6" src="<?php echo $rutaImagen6; ?>">
    </div> 
    
    <script src="./../js/MisPersonajes.js"></script>
</body>
</html>