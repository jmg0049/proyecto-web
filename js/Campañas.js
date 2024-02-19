//Opciones Usuario
function opcinonesusuario(){
    var o = document.getElementById("usuario");
    var opcion = o.options[o.selectedIndex].value;
    
    if(opcion == 'cambio'){
        window.location.href='./../html/formulario_inicio.html';
    }
    if(opcion == 'cerrar'){
        window.location.href='./../php/cerrar_sesion.php';
    }
        
}
var mensaje1 = function () {
    var texto1 = document.getElementById("Campaña1");
    texto1.value = " ";
    var username = 'Nobody';
    console.log(username);
};
var mensaje2 = function () {
    var texto2 = document.getElementById("Campaña2");
    texto2.value = " ";
    var username = 'Nobody';
    console.log(username);
};
var mensaje3 = function () {
    var texto3 = document.getElementById("Campaña3");
    texto3.value = " ";
    var username = 'Nobody';
    console.log(username);
};
var mensaje4 = function () {
    var texto4 = document.getElementById("Campaña4");
    texto4.value = " ";
    var username = 'Nobody';
    console.log(username);
};

    document.addEventListener('DOMContentLoaded', function() {
        var botonGuardar1 = document.getElementById('guardar1'); // Asume que tienes un botón con este ID
        botonGuardar1.addEventListener('click', function() {
            var textoCampaña1 = document.getElementById('Campaña1').value;
            fetch('guardar_campañas.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'campaña1=' + encodeURIComponent(textoCampaña1)
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Manejar la respuesta del servidor aquí
            })
            .catch(error => console.error('Error:', error));
        });
    
    });
    document.addEventListener('DOMContentLoaded', function() {
        var botonGuardar2 = document.getElementById('guardar2'); // Asume que tienes un botón con este ID
        botonGuardar2.addEventListener('click', function() {
            var textoCampaña2 = document.getElementById('Campaña2').value;
            fetch('guardar_campañas.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'campaña2=' + encodeURIComponent(textoCampaña2)
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Manejar la respuesta del servidor aquí
            })
            .catch(error => console.error('Error:', error));
        });
    
    });
    document.addEventListener('DOMContentLoaded', function() {
        var botonGuardar3 = document.getElementById('guardar3'); // Asume que tienes un botón con este ID
        botonGuardar3.addEventListener('click', function() {
            var textoCampaña3 = document.getElementById('Campaña3').value;
            fetch('guardar_campañas.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'campaña3=' + encodeURIComponent(textoCampaña3)
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Manejar la respuesta del servidor aquí
            })
            .catch(error => console.error('Error:', error));
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var botonGuardar4 = document.getElementById('guardar4'); // Asume que tienes un botón con este ID
        botonGuardar4.addEventListener('click', function() {
            var textoCampaña4 = document.getElementById('Campaña4').value;
            fetch('guardar_campañas.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'campaña4=' + encodeURIComponent(textoCampaña4)
            })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Manejar la respuesta del servidor aquí
            })
            .catch(error => console.error('Error:', error));
        });
    
    });