var excursiones= [];

//levantar con ajax
$.ajax({
    type: "get",
    url: "../json/excursiones.json",
    dataType: "json",
    success: function (respuesta) {
        excursiones = respuesta;
        generarModal(1);
        
        }
    });

function generarModal (id){

    let imprimir ="";

    imprimir = imprimir + 
    `
    <div class="modal-header">
        <h5 class="modal-title" id="#modal_excursionesLabel">${excursiones[id-1].destino[lang]}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    `;

    for (let i=1; i<=excursiones[id-1].excursiones.length;i++){
        imprimir = imprimir + 
        `
        <div class="row d-flex justify-content-center align-items-center">
            <h2 class="col-12 text-center">${excursiones[id-1].excursiones[i-1].titulo[lang]}</h2>
            <img class="col-12 m-width" src="${excursiones[id-1].excursiones[i-1].url}" alt="${excursiones[id-1].excursiones[i-1].titulo[lang]}">
            <p class="col-12 text-center">${excursiones[id-1].excursiones[i-1].detalle[lang]}</p>
            <hr class="m-3">
        </div>
        `;
    }

    imprimir = imprimir + 
    `
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `;

    $('#generadorModal').html(imprimir);

}