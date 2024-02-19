<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";

// Crear una conexión al servidor MySQL
$conn = new mysqli($servername, $username, $password);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Crear la base de datos "Usuario" si no existe
$sql_create_db = "CREATE DATABASE IF NOT EXISTS Usuario";
if ($conn->query($sql_create_db) === TRUE) {
    echo "Base de datos creada con éxito.<br>";
} else {
    echo "Error al crear la base de datos: " . $conn->error . "<br>";
}

// Seleccionar la base de datos "Usuario"
$conn->select_db("Usuario");

// Crear la tabla de usuarios si no existe
$sql_create_table_usuarios = "CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if ($conn->query($sql_create_table_usuarios) === TRUE) {
    echo "Tabla de usuarios creada con éxito.<br>";
} else {
    echo "Error al crear la tabla de usuarios: " . $conn->error . "<br>";
}

// Crear la tabla de personajes si no existe
$sql_create_table_personajes = "CREATE TABLE IF NOT EXISTS personajes (
    id_personaje INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    raza VARCHAR(50) NOT NULL,
    genero VARCHAR(10) NOT NULL,
    clase VARCHAR(50) NOT NULL,
    color_pelo VARCHAR(30) NOT NULL,
    color_ropa VARCHAR(30) NOT NULL,
    fuerza INT NOT NULL,
    destreza INT NOT NULL,
    constitucion INT NOT NULL,
    inteligencia INT NOT NULL,
    sabiduria INT NOT NULL,
    carisma INT NOT NULL,
    historia TEXT,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    Furia BOOLEAN DEFAULT FALSE,
    Ataque_circular BOOLEAN DEFAULT FALSE,
    Resistencia BOOLEAN DEFAULT FALSE,
    Golpe_Maestro BOOLEAN DEFAULT FALSE,
    Meditacion BOOLEAN DEFAULT FALSE,
    Bola_fuego BOOLEAN DEFAULT FALSE,
    Disparo_escarcha BOOLEAN DEFAULT FALSE,
    Relampago BOOLEAN DEFAULT FALSE,
    Telequinesis BOOLEAN DEFAULT FALSE,
    Sanacion BOOLEAN DEFAULT FALSE,
    Disparo_centrado BOOLEAN DEFAULT FALSE,
    Sombra BOOLEAN DEFAULT FALSE,
    Puñalada BOOLEAN DEFAULT FALSE,
    Robo BOOLEAN DEFAULT FALSE,
    Agilidad BOOLEAN DEFAULT FALSE,
    imagenPersonaje varchar(225) NOT NULL
)";

$sql_create_table_campañas = "CREATE TABLE IF NOT EXISTS campañas (
    id_campaña INT AUTO_INCREMENT PRIMARY KEY,
    campaña1 VARCHAR(250) NOT NULL,
    campaña2 VARCHAR(250) NOT NULL,
    campaña3 VARCHAR(250) NOT NULL,
    campaña4 VARCHAR(250) NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
  
)";

if ($conn->query($sql_create_table_personajes) === TRUE) {
    echo "Tabla de personajes creada con éxito.<br>";
} else {
    echo "Error al crear la tabla de personajes: " . $conn->error . "<br>";
}
if ($conn->query($sql_create_table_campañas) === TRUE) {
    echo "Tabla de campaña creada con éxito.<br>";
} else {
    echo "Error al crear la tabla de campaña: " . $conn->error . "<br>";
}
$conn->close();
?>