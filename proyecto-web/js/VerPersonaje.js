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