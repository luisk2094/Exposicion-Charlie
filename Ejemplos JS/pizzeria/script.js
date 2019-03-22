

function cambia_tamanyo(variable) {
    if (variable === 1) {
        //document.
        document.getElementById('imgPizza').setAttribute('width', '170');
    }
    if (variable === 2) {
        document.getElementById('imgPizza').setAttribute('width', '100');
    }
    if (variable === 3) {
        document.getElementById('imgPizza').setAttribute('width', '50');
    }
}
function cambiamasa(variable) {
    if (variable === 1) {
        //document.
        document.getElementById('imgPizza').setAttribute('src', 'imagenes/crunchy.png');
    }
    if (variable === 2) {
        document.getElementById('imgPizza').setAttribute('src', 'imagenes/d4.png');
    }
    if (variable === 3) {
        document.getElementById('imgPizza').setAttribute('src', 'imagenes/dd.png');
    }
    if (variable === 4) {
        document.getElementById('imgPizza').setAttribute('src', 'imagenes/original.png');
    }
}



function activa(tipo) {
    if (document.getElementById(tipo).checked) {
        document.getElementById(tipo + 's').removeAttribute('disabled');
    }
    else {
        document.getElementById(tipo + 's').setAttribute('disabled', 'disabled');
    }
}
var precio1 = 0;

function precio() {
    if (document.getElementById('tam1').checked) {
        precio1 = 3000 * document.getElementById('tam1').getAttribute('value');
    }
    if (document.getElementById('tam2').checked) {
        precio1 = 3000 * document.getElementById('tam2').getAttribute('value');
    }
    if (document.getElementById('tam3').checked) {
        precio1 = 3000 * document.getElementById('tam3').getAttribute('value');
    }
    if (document.getElementById('tipo1').checked) {
        precio1 = parseInt(precio1) + parseInt(document.getElementById('tipo1').getAttribute('value'));
    }
    if (document.getElementById('tipo2').checked) {
        precio1 = parseInt(precio1) + parseInt(document.getElementById('tipo2').getAttribute('value'));
    }
    if (document.getElementById('tipo3').checked) {
        precio1 = parseInt(precio1) + parseInt(document.getElementById('tipo3').getAttribute('value'));
    }
    if (document.getElementById('tipo4').checked) {
        precio1 = parseInt(precio1) + parseInt(document.getElementById('tipo4').getAttribute('value'));
    }
    for (var inicio = 1; inicio <= 6; inicio++) {
        if (document.getElementById('otro' + inicio).checked) {
            precio1 = parseInt(precio1.valueOf()) + parseInt(document.getElementById('otro' + inicio).getAttribute('value'));
        }
    }
    for (var inicio = 1; inicio <= 6; inicio++) {
        if (document.getElementById('carne' + inicio).checked) {
            precio1 = parseInt(precio1.valueOf()) + parseInt(document.getElementById('carne' + inicio).getAttribute('value'));
        }
    }
    if (document.getElementById('queso').checked) {
    var lista = document.getElementById("quesos");
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var valorSeleccionado = opcionSeleccionada.value;
    precio1 = parseInt(precio1) + parseInt(valorSeleccionado);
    }
    if (document.getElementById('salsa').checked) {
    var lista = document.getElementById("salsas");
    var indiceSeleccionado1 = lista.selectedIndex;
    var opcionSeleccionada1 = lista.options[indiceSeleccionado1];
    var valorSeleccionado1 = opcionSeleccionada1.value;
    precio1 = parseInt(precio1) + parseInt(valorSeleccionado1);
    }
    precio1 = document.getElementById('cantidad').value * parseInt(precio1.valueOf());
    document.getElementById('precio').setAttribute('value', precio1);
    document.getElementById('impuesto').setAttribute('value', impuestodeventa());
    document.getElementById('costoexpress').setAttribute('value', express());
    document.getElementById('total').setAttribute('value', parseInt(express()) + parseInt(impuestodeventa()) + parseInt(precio1));
}
function impuestodeventa() {
    return precio1 * 0.13;
}
function express() {
    if (document.getElementById('cantidad').getAttribute('value') >= 1) {
        if (document.getElementById('express').checked) {
            return document.getElementById('express').getAttribute('value');
        }
        else {
            return 0;
        }
    }
    else {
        return 0;
    }
}





//setatribute cambia el valor de una variable recive 
//el nombre de la variable y el valor x lo que se va a cambiar 
//method adds the specified attribute to an element, and gives it the specified value.



//removeatribute remueve todos los atributos de la clase que se le aplica method 
//removes the specified attribute from an element.

//get atribute obtiene los valores de una clase
//method returns the value of the attribute with the specified name,


//elementbytagname busca un elemento x su nombre y en la posicion que esta en la pag