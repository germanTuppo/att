var lang = [];

if (JSON.parse(localStorage.getItem("lang"))==undefined){
    lang[0]="es";
    localStorage.setItem("lang", JSON.stringify(lang));
}

/****************************************************************************************
 * 
 * 
 * ACA TENEMOS QUE VER SI ESTO ES LO MEJOR; PERO DE MOMENTO LO VOY A HACER ASI
 * 
 * 
 ****************************************************************************************/

function FiltrarIdioma(cod){

    lang[0]=cod;
    localStorage.setItem("lang", JSON.stringify(lang));

    /* Selecciono la bandera del menú */
    switch (lang[0]) {
        case 'es':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/espana.png" alt="">';
        break;
        case 'pt':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/brasil.png" alt="">';
        break;
        case 'en':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/reino-unido.png" alt="">';
        break;
        case 'it':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/italia.png" alt="">';
        break;
        case 'fr':
            document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/francia.png" alt="">';
        break;
    }


/* ESTO YA ES MEDIO RANDOM PERO ESTOY APRENDIENDO MAS JAVASCRIPT QUE NUNCA; LO TENIA QUE HABER HECHO ANTES */
switch (lang[0]) {
    case 'es':
    
    break;


    case 'pt':

    break;


    case 'en':

    break;


    case 'it':
    
    break;


    case 'fr':

    break;
    }
}


//levanto la información del lenguaje guardado en LocalStorage
lang=JSON.parse(localStorage.getItem("lang"));

var itinerario = [];
function FiltrarItinerario(cod){

    itinerario[0]=cod;
    itinerario[1]=lang[0];
    localStorage.setItem("itinerario", JSON.stringify(itinerario));
}


/****************************************************************************************
 * 
 * 
 * SELECCION DE LENGUAJE DESDE EL MENÜ (PARA LAS PÁGINAS)
 * 
 * 
 ****************************************************************************************/

switch (lang[0]) {
    case 'es':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/espana.png" alt="">';
    break;
    case 'pt':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/brasil.png" alt="">';
    break;
    case 'en':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/reino-unido.png" alt="">';
    break;
    case 'it':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/italia.png" alt="">';
    break;
    case 'fr':
        document.getElementById('selected-flag').innerHTML='<img class="flag" src="../media/flags/francia.png" alt="">';
    break;
}


/* Lenguaje de los elementos estáticos de las secciones */
switch (lang[0]) {
    case 'es':
    
    break;


    case 'pt':

    break;


    case 'en':

    break;


    case 'it':
    
    break;


    case 'fr':

    break;
}