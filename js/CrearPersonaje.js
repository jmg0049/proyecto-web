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
 //Resetear Formulario
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('Restablecer').addEventListener('click', function() {
        resetForm();
    });
});

function resetForm() {
    // Restablece el formulario a su estado inicial
    document.getElementById('formulario_personaje').reset();

    // Aquí puedes añadir cualquier otra lógica para restablecer elementos adicionales si es necesario
}



//Cambiar Habilidades
function Habilidad(){
    var c = document.getElementById("clase");
    var clase = c.options[c.selectedIndex].value;

    var H1 = document.getElementById("habilidad1");
    var h1 = document.getElementById("textoh1");
    var H2 = document.getElementById("habilidad2");
    var h2 = document.getElementById("textoh2");
    var H3 = document.getElementById("habilidad3");
    var h3 = document.getElementById("textoh3");
    var H4 = document.getElementById("habilidad4");
    var h4 = document.getElementById("textoh4");
    var H5 = document.getElementById("habilidad5");
    var h5 = document.getElementById("textoh5");

    var H6 = document.getElementById("habilidad6");
    var h6 = document.getElementById("textoh6");
    var H7 = document.getElementById("habilidad7");
    var h7 = document.getElementById("textoh7");
    var H8 = document.getElementById("habilidad8");
    var h8 = document.getElementById("textoh8");
    var H9 = document.getElementById("habilidad9");
    var h9 = document.getElementById("textoh9");
    var H10 = document.getElementById("habilidad10");
    var h10 = document.getElementById("textoh10");

    var H11 = document.getElementById("habilidad11");
    var h11 = document.getElementById("textoh11");
    var H12 = document.getElementById("habilidad12");
    var h12 = document.getElementById("textoh12");
    var H13 = document.getElementById("habilidad13");
    var h13 = document.getElementById("textoh13");
    var H14 = document.getElementById("habilidad14");
    var h14 = document.getElementById("textoh14");
    var H15 = document.getElementById("habilidad15");
    var h15 = document.getElementById("textoh15");
    

    if(clase=='Guerrero'){
        console.log("Habilidades Guerrero");
        H1.style.visibility = "visible";
        h1.style.visibility = "visible";
        H2.style.visibility = "visible";
        h2.style.visibility = "visible";
        H3.style.visibility = "visible";
        h3.style.visibility = "visible";
        H4.style.visibility = "visible";
        h4.style.visibility = "visible";
        H5.style.visibility = "visible";
        h5.style.visibility = "visible";

        H6.style.visibility = "hidden";
        h6.style.visibility = "hidden";
        H7.style.visibility = "hidden";
        h7.style.visibility = "hidden";
        H8.style.visibility = "hidden";
        h8.style.visibility = "hidden";
        H9.style.visibility = "hidden";
        h9.style.visibility = "hidden";
        H10.style.visibility = "hidden";
        h10.style.visibility = "hidden";

        H11.style.visibility = "hidden";
        h11.style.visibility = "hidden";
        H12.style.visibility = "hidden";
        h12.style.visibility = "hidden";
        H13.style.visibility = "hidden";
        h13.style.visibility = "hidden";
        H14.style.visibility = "hidden";
        h14.style.visibility = "hidden";
        H15.style.visibility = "hidden";
        h15.style.visibility = "hidden";

    }else if(clase=='Mago'){
        console.log("Habilidades Mago");
        H1.style.visibility = "hidden";
        h1.style.visibility = "hidden";
        H2.style.visibility = "hidden";
        h2.style.visibility = "hidden";
        H3.style.visibility = "hidden";
        h3.style.visibility = "hidden";
        H4.style.visibility = "hidden";
        h4.style.visibility = "hidden";
        H5.style.visibility = "hidden";
        h5.style.visibility = "hidden";

        H6.style.visibility = "visible";
        h6.style.visibility = "visible";
        H7.style.visibility = "visible";
        h7.style.visibility = "visible";
        H8.style.visibility = "visible";
        h8.style.visibility = "visible";
        H9.style.visibility = "visible";
        h9.style.visibility = "visible";
        H10.style.visibility = "visible";
        h10.style.visibility = "visible";

        H11.style.visibility = "hidden";
        h11.style.visibility = "hidden";
        H12.style.visibility = "hidden";
        h12.style.visibility = "hidden";
        H13.style.visibility = "hidden";
        h13.style.visibility = "hidden";
        H14.style.visibility = "hidden";
        h14.style.visibility = "hidden";
        H15.style.visibility = "hidden";
        h15.style.visibility = "hidden";
        
    }else if(clase=='Picaro'){
        console.log("Habilidades Picaro");
        H1.style.visibility = "hidden";
        h1.style.visibility = "hidden";
        H2.style.visibility = "hidden";
        h2.style.visibility = "hidden";
        H3.style.visibility = "hidden";
        h3.style.visibility = "hidden";
        H4.style.visibility = "hidden";
        h4.style.visibility = "hidden";
        H5.style.visibility = "hidden";
        h5.style.visibility = "hidden";

        H6.style.visibility = "hidden";
        h6.style.visibility = "hidden";
        H7.style.visibility = "hidden";
        h7.style.visibility = "hidden";
        H8.style.visibility = "hidden";
        h8.style.visibility = "hidden";
        H9.style.visibility = "hidden";
        h9.style.visibility = "hidden";
        H10.style.visibility = "hidden";
        h10.style.visibility = "hidden";

        H11.style.visibility = "visible";
        h11.style.visibility = "visible";
        H12.style.visibility = "visible";
        h12.style.visibility = "visible";
        H13.style.visibility = "visible";
        h13.style.visibility = "visible";
        H14.style.visibility = "visible";
        h14.style.visibility = "visible";
        H15.style.visibility = "visible";
        h15.style.visibility = "visible";
        
    }
}

//Limitar Habilidades
function limitarhabilidades(){
    var h1 = document.getElementById("habilidad1");
    var h2 = document.getElementById("habilidad2");
    var h3 = document.getElementById("habilidad3");
    var h4 = document.getElementById("habilidad4");
    var h5 = document.getElementById("habilidad5");

    var h6 = document.getElementById("habilidad6");
    var h7 = document.getElementById("habilidad7");
    var h8 = document.getElementById("habilidad8");
    var h9 = document.getElementById("habilidad9");
    var h10 = document.getElementById("habilidad10");

    var h11 = document.getElementById("habilidad11");
    var h12 = document.getElementById("habilidad12");
    var h13 = document.getElementById("habilidad13");
    var h14 = document.getElementById("habilidad14");
    var h15 = document.getElementById("habilidad15");
   
   
  var C = 0;
  if(h1.style.visibility=='hidden'){
    h1.checked=false;
}else{
    if(h1.checked==true){
        C=C+1;
        if(h1.checked==false){
            C=C-1;
        }
    }
}
if(h2.style.visibility=='hidden'){
    h2.checked=false;
}else{
    if(h2.checked==true){
        C=C+1;
        if(h2.checked==false){
            C=C-1;
        }
    }
}
if(h3.style.visibility=='hidden'){
    h3.checked=false;
}else{
    if(h3.checked==true){
        C=C+1;
        if(h3.checked==false){
            C=C-1;
        }
    }
}
if(h4.style.visibility=='hidden'){
    h4.checked=false;
}else{
    if(h4.checked==true){
        C=C+1;
        if(h4.checked==false){
            C=C-1;
        }
    }
}
if(h5.style.visibility=='hidden'){
    h5.checked=false;
}else{
    if(h5.checked==true){
        C=C+1;
        if(h5.checked==false){
            C=C-1;
        }
    }
}
if(h6.style.visibility=='hidden'){
    h6.checked=false;
}else{
    if(h6.checked==true){
        C=C+1;
        if(h6.checked==false){
            C=C-1;
        }
    }
}
if(h7.style.visibility=='hidden'){
    h7.checked=false;
}else{
    if(h7.checked==true){
        C=C+1;
        if(h7.checked==false){
            C=C-1;
        }
    }
}
if(h8.style.visibility=='hidden'){
    h8.checked=false;
}else{
    if(h8.checked==true){
        C=C+1;
        if(h8.checked==false){
            C=C-1;
        }
    }
}
if(h9.style.visibility=='hidden'){
    h9.checked=false;
}else{
    if(h9.checked==true){
        C=C+1;
        if(h9.checked==false){
            C=C-1;
        }
    }
}
if(h10.style.visibility=='hidden'){
    h10.checked=false;
}else{
    if(h10.checked==true){
        C=C+1;
        if(h10.checked==false){
            C=C-1;
        }
    }
}
if(h11.style.visibility=='hidden'){
    h11.checked=false;
}else{
    if(h11.checked==true){
        C=C+1;
        if(h11.checked==false){
            C=C-1;
        }
    }
}
if(h12.style.visibility=='hidden'){
    h12.checked=false;
}else{
    if(h12.checked==true){
        C=C+1;
        if(h12.checked==false){
            C=C-1;
        }
    }
}
if(h13.style.visibility=='hidden'){
    h13.checked=false;
}else{
    if(h13.checked==true){
        C=C+1;
        if(h13.checked==false){
            C=C-1;
        }
    }
}
if(h14.style.visibility=='hidden'){
    h14.checked=false;
}else{
    if(h14.checked==true){
        C=C+1;
        if(h14.checked==false){
            C=C-1;
        }
    }
}
if(h15.style.visibility=='hidden'){
    h15.checked=false;
}else{
    if(h15.checked==true){
        C=C+1;
        if(h15.checked==false){
            C=C-1;
        }
    }
}


    if(C>=3){
        if(h1.checked==false){
            h1.disabled = true;
        }
        if(h2.checked==false){
            h2.disabled = true;
        }
        if(h3.checked==false){
            h3.disabled = true;
        }
        if(h4.checked==false){
            h4.disabled = true;
        }
        if(h5.checked==false){
            h5.disabled = true;
        }
        if(h6.checked==false){
            h6.disabled = true;
        }
        if(h7.checked==false){
            h7.disabled = true;
        }
        if(h8.checked==false){
            h8.disabled = true;
        }
        if(h9.checked==false){
            h9.disabled = true;
        }
        if(h10.checked==false){
            h10.disabled = true;
        }
        if(h11.checked==false){
            h11.disabled = true;
        }
        if(h12.checked==false){
            h12.disabled = true;
        }
        if(h13.checked==false){
            h13.disabled = true;
        }
        if(h14.checked==false){
            h14.disabled = true;
        }
        if(h15.checked==false){
            h15.disabled = true;
        }
        
    }else if(C<3){
        h1.disabled = false;
        h2.disabled = false;
        h3.disabled = false;
        h4.disabled = false;
        h5.disabled = false;
        h6.disabled = false;
        h7.disabled = false;
        h8.disabled = false;
        h9.disabled = false;
        h10.disabled = false;
        h11.disabled = false;
        h12.disabled = false;
        h13.disabled = false;
        h14.disabled = false;
        h15.disabled = false;
    }
}

//Cambiar Stats
var f = 8;
    function subirf() {
        if(f<20){
            document.getElementById('fuerza').value = ++f;
        }
    }
    function bajarf() {
        if(f!=0){
            document.getElementById('fuerza').value = --f;
        }
    }
var d = 8;
    function subird() {
        if(d<20){
            document.getElementById('destreza').value = ++d;
        }
    }
    function bajard() {
        if(d!=0){
            document.getElementById('destreza').value = --d;
        }
    }
var c = 8;
    function subirc() {
        if(c<20){
            document.getElementById('constitución').value = ++c;
        }
    }
    function bajarc() {
        if(c!=0){
            document.getElementById('constitución').value = --c;
        }
    }
var i = 8;
    function subiri() {
        if(i<20){
            document.getElementById('inteligencia').value = ++i;
        }
    }
    function bajari() {
        if(i!=0){
            document.getElementById('inteligencia').value = --i;
        }
    }
var s = 8;
    function subirs() {
        if(s<20){
            document.getElementById('sabiduría').value = ++s;
        }
    }
    function bajars() {
        if(s!=0){
            document.getElementById('sabiduría').value = --s;
        }
    }
var a = 8;
    function subira() {
        if(a<20){
            document.getElementById('carisma').value = ++a;
        }
    }
    function bajara() {
        if(a!=0){
            document.getElementById('carisma').value = --a;
        }
    }

//Cambiar Dibujo
function cambiodibujo(){
var r = document.getElementById("raza");
var raza = r.options[r.selectedIndex].value;
var g = document.getElementById("genero");
var genero = g.options[g.selectedIndex].value;
var c = document.getElementById("clase");
var clase = c.options[c.selectedIndex].value;
var cp = document.getElementById("colorpelo");
var colorpelo = cp.options[cp.selectedIndex].value;
var cr = document.getElementById("colorropa");
var colorropa = cr.options[cr.selectedIndex].value;

        if(raza=='Humano'){
            console.log("Humano");

            if(genero=='Hombre'){
                console.log("Hombre");

                if(clase=='Guerrero'){
                    console.log("Guerrero");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 1A.png';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 1B.png';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 1C.png';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 1D.png';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 2A.png';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 2B.png';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 2C.png';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 2D.png';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 3A.png';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 3B.png';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 3C.png';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = './../imagenes/Humano Guerrero 3D.png';

                        }
                    }
                }else if(clase=='Mago'){
                    console.log("Mago");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Picaro'){
                    console.log("Pícaro");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }
            }else if(genero=='Mujer'){
                console.log("Mujer");

                if(clase=='Guerrero'){
                    console.log("Guerrero");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Mago'){
                    console.log("Mago");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Picaro'){
                    console.log("Pícaro");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }
            }
        }else if(raza=='Elfo'){
            console.log("Elfo");

            if(genero=='Hombre'){
                console.log("Hombre");

                if(clase=='Guerrero'){
                    console.log("Guerrero");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Mago'){
                    console.log("Mago");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Picaro'){
                    console.log("Pícaro");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }
            }else if(genero=='Mujer'){
                console.log("Mujer");

                if(clase=='Guerrero'){
                    console.log("Guerrero");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Mago'){
                    console.log("Mago");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Picaro'){
                    console.log("Pícaro");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }
            }

        }else if(raza=='Enano'){
            console.log("Enano");

            if(genero=='Hombre'){
                console.log("Hombre");

                if(clase=='Guerrero'){
                    console.log("Guerrero");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Mago'){
                    console.log("Mago");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Picaro'){
                    console.log("Pícaro");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }
            }else if(genero=='Mujer'){
                console.log("Mujer");

                if(clase=='Guerrero'){
                    console.log("Guerrero");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Mago'){
                    console.log("Mago");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }else if(clase=='Picaro'){
                    console.log("Pícaro");

                    if(colorpelo=='Negro'){
                        console.log("Pelo Negro");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';
                        }

                    }else if(colorpelo=='Amarillo'){
                        console.log("Pelo Amarillo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = 'Humano Guerrero 2A.png';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }else if(colorpelo=='Rojo'){
                        console.log("Pelo Rojo");

                        if(colorropa=='Rojo'){
                            console.log("Ropa Roja");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Azul'){
                            console.log("Ropa Azul");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Verde'){
                            console.log("Ropa Verde");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }else if(colorropa=='Amarillo'){
                            console.log("Ropa Amarilla");
                            var image = document.getElementById("Dibujo");
                            image.src = '';

                        }
                    }
                }
            }
        }
        console.log("--------")
}