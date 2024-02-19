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
    <title>Creación Personaje</title>
    <link rel="stylesheet" href="./../css/CrearPersonaje.css">
    <style>
        /* Tus estilos CSS existentes */
        body {
            background-color: rgb(190, 154, 105);
            font-family: Arial, sans-serif; /* Añade una fuente de respaldo */
        }
        
        /* Estilos para dispositivos móviles */
        @media only screen and (max-width: 600px) {
            /* Ajusta el tamaño y la posición de los botones superiores */
            #Menu, #Restablecer, #Guardar, #Usuario {
                width: 100px;
                left: calc(50% - 50px); /* Centra los botones */
                margin-top: 10px;
            }
            
            /* Ajusta el tamaño de los selectores */
            select {
                width: calc(100% - 20px); /* Resta el padding */
            }
            
            /* Ajusta el tamaño del dibujo */
            #Dibujo {
                width: 100%;
                max-width: 300px; /* Evita que el dibujo se estire demasiado */
                margin-left: auto;
                margin-right: auto;
            }
            
            /* Ajusta el tamaño del gráfico */
            #piechart {
                width: 100%;
                max-width: 300px;
                margin: 20px auto; /* Centra el gráfico */
            }
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js"></script>
    <!-- Agrega la carga de Google Charts -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  
    <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            // Traerme datos del php, usando cookies
            var guerreros1 = Cookies.get('datos');
            var magos1 = Cookies.get('datos2');
            var picaros1 = Cookies.get('datos3');
    
            var data = google.visualization.arrayToDataTable([
                ['tipoPersonaje', 'numero'],
                ['Guerrero', parseInt(guerreros1)],
                ['Mago', parseInt(magos1)],
                ['Pícaro', parseInt(picaros1)],
            ]);
    
            var options = {
                title: 'Porcentaje de personajes creados'
            };
    
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    
            chart.draw(data, options);
        }
    </script>
    
</head>
<body>
    <script>
        fetch('api.php')
            .then(response => response.text())
            .then(data => {
                document.getElementById('data-container').innerHTML = data;
            })
            .catch(error => console.error('Error fetching data:', error));
    </script>

    <input type="button" id="Menu" value="Menú" onclick="window.location.href='PaginaInicial.php'"> 
    <input type="button" id="Restablecer" value="Restablecer">  
    <form id="formulario_personaje" action="./guardar_personaje.php" method="post">
        <input type="submit" id="Guardar" name="Guardar" value="Guardar">
    
    <input type="button" id="Usuario" value="Usuario">
    <select id="usuario" value="usuario" onchange="opcinonesusuario()">
        <option>~~~~~~~~~~~~</option>
        <option value="cambio">Cambiar usuario</option>
        <option value="cerrar">Cerrar sesión</option>
    </select>

    <div id="Nombre">
        <label><b>Nombre:</b></label>
        <input type="text" id="nombre" name="nombre">
        <span id="errorNombre" style="color: red; display: none;">Por favor, ingrese un nombre.</span>
    </div>

    
    <div id="Raza" ><label><b>Raza:</b></label>
        <select id="raza" name="raza" onchange="cambiodibujo()">
            <option value="Humano">Humano</option>
            <option value="Elfo">Elfo</option>
            <option value="Enano">Enano</option>
        </select>
    </div>

    <div id="Genero"><label><b>Género:</b></label>
        <select id="genero" name="genero" onchange="cambiodibujo()">
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
        </select>
    </div>

    <div id="Clase"><label><b>Clase:</b></label>
        <select id="clase" name="clase" onchange="cambiodibujo(); Habilidad(); limitarhabilidades()" >
            <option value="Guerrero" title="Un guerrero se dedica a atacar con armas pesadas, llevar armadura pesada o mediana, y atacar físicamente. Se beneficia de los atributos como fuerza y constitución.">Guerrero</option>
            <option value="Mago" title="Un mago se dedica a atacar con magia, llevar armadura ligera, y atacar a distancia. Se beneficia de los atributos como inteligencia y sabiduría.">Mago</option>
            <option value="Picaro" title="Un pícaro se dedica a atacar con armas ligeras, llevar armadura mediana o ligera, y atacar a distancia o por la espalda. Se beneficia de atributos como destreza y carisma.">Pícaro</option>
        </select>
    </div>

    <div id="imagenPersonaje">
    <label><b>URL de la imagen:</b></label><input type="text" id="urlImagenPersonaje" name="imagenPersonaje"> 
    <span id="errorimagenPersonaje" style="color: red; display: none;">Por favor, ingrese la URL de la imagen.</span>
</div>


    <div id="ColorPelo"><label><b>Color Pelo:</b></label>
        <select id="colorpelo" name="colorpelo" onchange="cambiodibujo()">
            <option value="Negro">Negro</option>
            <option value="Amarillo">Amarillo</option>
            <option value="Rojo">Rojo</option>
        </select>
    </div>

    <div id="ColorRopa"><label><b>Color Ropa:</b></label>
        <select  id="colorropa" name="colorropa" onchange="cambiodibujo()">
            <option value="Rojo">Rojo</option>
            <option value="Azul">Azul</option>
            <option value="Verde">Verde</option>
            <option value="Amarillo">Amarillo</option>
        </select>
    </div> 
 
    <div id="Habilidades"><label><b>Habilidades:</b></label></div>
        <div id="h1"><input id="habilidad1" name="habilidad1" type="checkbox" onclick="limitarhabilidades()"></div><p title="Aumenta temporalmente el ataque y la velocidad." id="textoh1">Furia</p>
        <div id="h2"><input id="habilidad2" name="habilidad2" type="checkbox" onclick="limitarhabilidades()"></div><p title="Ataca varias veces en área." id="textoh2">Ataque Circular</p>
        <div id="h3"><input id="habilidad3" name="habilidad3" type="checkbox" onclick="limitarhabilidades()"></div><p title="Aumenta temporalmente la defensa." id="textoh3">Resistencia</p>
        <div id="h4"><input id="habilidad4" name="habilidad4" type="checkbox" onclick="limitarhabilidades()"></div><p title="Realiza un ataque poderoso a un solo objetivo." id="textoh4">Golpe Maestro</p>
        <div id="h5"><input id="habilidad5" name="habilidad5" type="checkbox" onclick="limitarhabilidades()"></div><p title="Recupera una pequeña cantidad de vida." id="textoh5">Meditación</p>
        
        <div id="h6"><input id="habilidad6" name="habilidad6" type="checkbox" onclick="limitarhabilidades()"></div><p title="Aumenta temporalmente el ataque y la velocidad." id="textoh6">Bola de Fuego</p>
        <div id="h7"><input id="habilidad7" name="habilidad7" type="checkbox" onclick="limitarhabilidades()"></div><p title="Ataca varias veces en área." id="textoh7">Disparo de Escarcha</p>
        <div id="h8"><input id="habilidad8" name="habilidad8" type="checkbox" onclick="limitarhabilidades()"></div><p title="Aumenta temporalmente la defensa." id="textoh8">Relámpago</p>
        <div id="h9"><input id="habilidad9" name="habilidad9" type="checkbox" onclick="limitarhabilidades()"></div><p title="Realiza un ataque poderoso a un solo objetivo." id="textoh9">Telequinesis</p>
        <div id="h10"><input id="habilidad10" name="habilidad10" type="checkbox" onclick="limitarhabilidades()"></div><p title="Recupera una pequeña cantidad de vida." id="textoh10">Sanación</p>
        
        <div id="h11"><input id="habilidad11" name="habilidad11" type="checkbox" onclick="limitarhabilidades()"></div><p title="Aumenta temporalmente el ataque y la velocidad." id="textoh11">Disparo Certero</p>
        <div id="h12"><input id="habilidad12" name="habilidad12" type="checkbox" onclick="limitarhabilidades()"></div><p title="Ataca varias veces en área." id="textoh12">Sombra</p>
        <div id="h13"><input id="habilidad13" name="habilidad13" type="checkbox" onclick="limitarhabilidades()"></div><p title="Aumenta temporalmente la defensa." id="textoh13">Puñalada</p>
        <div id="h14"><input id="habilidad14" name="habilidad14" type="checkbox" onclick="limitarhabilidades()"></div><p title="Realiza un ataque poderoso a un solo objetivo." id="textoh14">Robo</p>
        <div id="h15"><input id="habilidad15" name="habilidad15" type="checkbox" onclick="limitarhabilidades()"></div><p title="Recupera una pequeña cantidad de vida." id="textoh15">Agilidad</p>

    <img id="Dibujo" src="./../imagenes/Humano Guerrero 1A.png">
 
    <div id="Fuerza"><label title="La fuerza es la estadística que determina la ejecución de acciones como levantar peso, lanzar cosas pesadas, romper elementos, el daño de un ataque simple, etc."><b>Fuerza</b></label><input type="text" style="width: 15px" id="fuerza" name="fuerza" value="8"></input><button type="button" onclick="subirf()">^</button><button type="button" onclick="bajarf()">v</button></div>
    <div id="Destreza"><label title="La destreza es la estadística que determina la habilidad física, afectando a acciones como saltar, esquivar, acrobacias, puntería, realizar ataques físicos complejos, etc."><b>Destreza</b></label><input type="text" style="width: 15px" id="destreza" name="destreza" value="8"></input><button type="button" onclick="subird()">^</button><button type="button" onclick="bajard()">v</button></div>
    <div id="Constitucion"><label title="La constitución es la estadística que determina lo resistente que eres, la carga que puedes llevar, la cantidad de resistencia, cantidad de vida y defensa, etc."><b>Constitución</b></label><input type="text" style="width: 15px" id="constitución" name="constitucion" value="8"></input><button type="button" onclick="subirc()">^</button><button type="button" onclick="bajarc()">v</button></div>

    <div id="Inteligencia"><label title="La inteligencia es la estadística que determina tu capacidad de comprender cosas complejas, habilidades mágicas, activar mecanismos, aprender, etc."><b>Inteligencia</b></label><input type="text" style="width: 15px" id="inteligencia" name="inteligencia" value="8"></input><button type="button" onclick="subiri()">^</button><button type="button" onclick="bajari()">v</button></div>
    <div id="Sabiduria"><label title="La sabiduría es la estadística que determina tu intuición, conocimientos adquiridos, cultura, etc."><b>Sabiduría</b></label><input type="text" style="width: 15px" id="sabiduría" name="sabiduria" value="8"></input><button type="button" onclick="subirs()">^</button><button type="button" onclick="bajars()">v</button></div>
    <div id="Carisma"><label title="El carisma es la estadística que determina tu persuación, intimidación, capacidad de engaño, etc."><b>Carisma</b></label><input type="text" style="width: 15px" id="carisma" name="carisma" value="8"></input><button type="button" onclick="subira()">^</button><button type="button" onclick="bajara()">v</button></div>

    <div id="Historia">
    <label><b>Historia:</b></label>
    <br>
    <textarea style="width: 1250px; height: 100px;" name="historia"></textarea>
    </div>
    </form>
    
    

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <script type="text/javascript"> 

    document.getElementById("formulario_personaje").addEventListener("submit", function(event) {
        var nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            document.getElementById("errorNombre").style.display = "block";
            alert("Por favor, ingrese un nombre para el personaje."); // Mensaje emergente de alerta
            event.preventDefault(); // Detiene el envío del formulario
        }
    });

    </script>
    <div id="piechart" style="width: 400px; height: 200px "></div>
</body>

    <script src="./../js/CrearPersonaje.js"></script>
</html>