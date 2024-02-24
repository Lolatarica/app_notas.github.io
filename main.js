$(".nuevo").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="ingresar"]').css("display", "block");
});

$(".cerrar").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="cursando"]').css("display", "block");
});

$(".restantes").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="restantes"]').css("display", "block");
});

$(".cursadas").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="cursadas"]').css("display", "block");
});

$(".cursando").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="cursando"]').css("display", "block");
});

$(".info").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="info"]').css("display", "block");
});


$('[data-vista="ingresar"] form').on("submit", function () {
    let materia = $("#materia").val();
    let profesor = $("#profesor").val();
    let horario = $("#horario").val();
    let aula =$("#aula").val();
    let nota_1 =$("#nota_1").val();
    let nota_2 =$("#nota_2").val();
    let nota_3 =$("#nota_3").val();
    let estado = $('input[type="radio"]:checked').val();

    let nuevo_card = $("<div></div>");

    if (estado === "cursando") {
        nuevo_card.addClass("card mb-3 px-3 py-3 bg-light border-0 rounder shadow-sm")
              .html(`<h2 class="card-title text-center fs-3 bg-black text-white">${materia}</h2>
              <div class="card-body container row">
                  <div class="col uno">
                      <p class="nota-1-card">${nota_1}</p>
                      <p class="nota-2-card">${nota_2}</p>
                      <p class="nota-3-card">${nota_3}</p>
                  </div>
                  <div class="col dos">
                      <p class="profesor-card">${profesor}</p>
                      <p class="horario-card">${horario}</p>
                      <p class="aula-card fw-bold">${aula}</p>
                  </div></div>
              <div class="botones d-flex justify-content-end">
                  <a href="#" class="mx-0 modificar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a>
                  <a href="#" class="mx-3 eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a>              
          </div>`);

        $("#materias_cursando").prepend(nuevo_card);
        $('[data-vista="ingresar"] form')[0].reset();
        $("[data-vista]").css("display", "none");
        $('[data-vista="cursando"]').css("display", "block");
    } else if (estado === "restantes") {
        nuevo_card.addClass("card mb-3 px-3 py-3 bg-light rounder shadow-sm border-0")
              .html(`<h2 class="card-title text-center fs-3 bg-warning text-white">${materia}</h2>
              <div class="container row">
                  <div class="col">
                      <p class="profesor-card">${profesor}</p>
                      <p class="horario-card">${horario}</p>
                      <p class="fw-bold aula-card">${aula}</p>
                  </div></div>
              <div class="d-flex justify-content-end">
                  <a href="#" class="mx-0 modificar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a>
                  <a href="#" class="mx-3 eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a>            
          </div>`);

        $("#materias_restantes").prepend(nuevo_card);
        $('[data-vista="ingresar"] form')[0].reset();
        $("[data-vista]").css("display", "none");
        $('[data-vista="restantes"]').css("display", "block");
    } else {
        nuevo_card.addClass("card mb-3 px-3 py-3 bg-light border-0 rounder shadow-sm")
              .html(`<h2 class="card-title text-center fs-3 bg-success text-white">${materia}</h2>
              <div class="card-body container row">
                  <div class="col dos">
                      <p class="nota-1-card">${nota_1}</p>
                      <p  class="nota-2-card">${nota_2}</p>
                      <p  class="nota-3-card">${nota_3}</p>
                  </div>
                  <div class="col uno">
                      <p class="profesor-card">${profesor}</p>
                      <p class="horario-card">${horario}</p>
                      <p Aula class="fw-bold aula-card">${aula}</p>
                  </div></div>
              <div class="d-flex justify-content-end">
                  <a href="#" class="mx-0 modificar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a>
                  <a href="#" class="mx-3 eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="eliminar bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a> 
          </div>`);

        $("#materias_cursadas").prepend(nuevo_card);
        $('[data-vista="ingresar"] form')[0].reset();
        $("[data-vista]").css("display", "none");
        $('[data-vista="cursadas"]').css("display", "block");
    }

    guardarMaterias();
    return false;
});

$('#materias_cursando').on("click", ".card .eliminar", function() {
    let rta = confirm("Estás seguro que querés eliminar esta materia?");
    if(rta) {
        $(this).parent().parent().remove();
    }
    guardarMaterias();
});


$('#materias_cursadas').on("click", ".card .eliminar", function() {
    let rta = confirm("Estás seguro que querés eliminar esta materia?");
    if(rta) {
        $(this).parent().parent().parent().remove();
    }
    guardarMaterias();
});


$('#materias_restantes').on("click", ".card .eliminar", function() {
    let rta = confirm("Estás seguro que querés eliminar esta materia?");
    if(rta) {
        $(this).parent().parent().remove();
    }
    guardarMaterias();
});

$('#borrar_cursando').on("click", function() {
    let rta = confirm("Estás seguro que querés eliminar todas las materias?");
    if(rta) {
        $("#materias_cursando").children().remove();
    }
    guardarMaterias();
});

$('#borrar_restantes').on("click", function() {
    let rta = confirm("Estás seguro que querés eliminar todas las materias?");
    if(rta) {
        $("#materias_restantes").children().remove();
    }
    guardarMaterias();
});

$('#borrar_cursadas').on("click", function() {
    let rta = confirm("Estás seguro que querés eliminar todas las materias?");
    if(rta) {
        $("#materias_cursadas").children().remove();
    }
    guardarMaterias();
});



function guardarMaterias() {
    let actuales_cursando = $("#materias_cursando").html();
    localStorage.setItem("materias_cursando", actuales_cursando);
    let actuales_cursadas = $("#materias_cursadas").html();
    localStorage.setItem("materias_cursadas", actuales_cursadas);
    let actuales_restantes = $("#materias_restantes").html();
    localStorage.setItem("materias_restantes", actuales_restantes);
}

$(function () {
    let guardados_cursando = localStorage.getItem("materias_cursando");
    if(guardados_cursando != null){
        $("#materias_cursando").html(guardados_cursando);
    }
    let guardados_cursadas = localStorage.getItem("materias_cursadas");
    if(guardados_cursadas != null){
        $("#materias_cursadas").html(guardados_cursadas);
    }
    let guardados_restantes = localStorage.getItem("materias_restantes");
    if(guardados_restantes != null){
        $("#materias_restantes").html(guardados_restantes);
    }
})

$('[data-vista="cursando"]').on("click", ".card .modificar", function() {

    let materia = $(this).parent().parent().children('h2').text();
    let profesor = $(this).parent().prev().children('div:last-of-type').children('.profesor-card').text();
    let horario = $(this).parent().prev().children('div:last-of-type').children('.horario-card').text();
    let aula = $(this).parent().prev().children('div:last-of-type').children('.aula-card').text();
    let nota_1 = $(this).parent().prev().children('.uno').children('.nota-1-card').text();
    let nota_2 = $(this).parent().prev().children('.uno').children('.nota-2-card').text();
    let nota_3 = $(this).parent().prev().children('.uno').children('.nota-3-card').text();

    $("#materia-antigua").val(materia);
    $("#profesor-antigua").val(profesor);
    $("#horario-antigua").val(horario);
    $("#aula-antigua").val(aula);
    $("#nota_1-antigua").val(nota_1);
    $("#nota_2-antigua").val(nota_2);
    $("#nota_3-antigua").val(nota_3);

    $(this).parent().parent().attr("data-modificando", "este");

    $('input[value="cursando"]').attr("checked", "checked");
    

    $("[data-vista]").css("display", "none");
    $('[data-vista="modificar"]').css("display", "block");
});

$('[data-vista="restantes"]').on("click", ".card .modificar", function() {

    let materia = $(this).parent().parent().children('h2').text();
    let profesor = $(this).parent().prev().children('div:last-of-type').children('.profesor-card').text();
    let horario = $(this).parent().prev().children('div:last-of-type').children('.horario-card').text();
    let aula = $(this).parent().prev().children('div:last-of-type').children('.aula-card').text();
    let nota_1 = $(this).parent().prev().children('.uno').children('.nota-1-card').text();
    let nota_2 = $(this).parent().prev().children('.uno').children('.nota-2-card').text();
    let nota_3 = $(this).parent().prev().children('.uno').children('.nota-3-card').text();

    $("#materia-antigua").val(materia);
    $("#profesor-antigua").val(profesor);
    $("#horario-antigua").val(horario);
    $("#aula-antigua").val(aula);
    $("#nota_1-antigua").val(nota_1);
    $("#nota_2-antigua").val(nota_2);
    $("#nota_3-antigua").val(nota_3);

    $(this).parent().parent().attr("data-modificando", "este");

    $('input[value="restantes"]').attr("checked", "checked");
    

    $("[data-vista]").css("display", "none");
    $('[data-vista="modificar"]').css("display", "block");
});

$('[data-vista="cursadas"]').on("click", ".card .modificar", function() {

    let materia = $(this).parent().parent().children('h2').text();
    let profesor = $(this).parent().prev().children('div:last-of-type').children('.profesor-card').text();
    let horario = $(this).parent().prev().children('div:last-of-type').children('.horario-card').text();
    let aula = $(this).parent().prev().children('div:last-of-type').children('.aula-card').text();
    let nota_1 = $(this).parent().prev().children('.uno').children('.nota-1-card').text();
    let nota_2 = $(this).parent().prev().children('.uno').children('.nota-2-card').text();
    let nota_3 = $(this).parent().prev().children('.uno').children('.nota-3-card').text();

    $("#materia-antigua").val(materia);
    $("#profesor-antigua").val(profesor);
    $("#horario-antigua").val(horario);
    $("#aula-antigua").val(aula);
    $("#nota_1-antigua").val(nota_1);
    $("#nota_2-antigua").val(nota_2);
    $("#nota_3-antigua").val(nota_3);

    $(this).parent().parent().attr("data-modificando", "este");

    $('input[value="cursadas"]').attr("checked", "checked");
    

    $("[data-vista]").css("display", "none");
    $('[data-vista="modificar"]').css("display", "block");
});

$('[data-vista="modificar"] form').on("submit", function () {

    let materia = $("#materia-antigua").val();
    let profesor = $("#profesor-antigua").val();
    let horario = $("#horario-antigua").val();
    let aula = $("#aula-antigua").val();
    let nota_1 = $("#nota_1-antigua").val();
    let nota_2 = $("#nota_2-antigua").val();
    let nota_3 = $("#nota_3-antigua").val();
    let estado = $('[data-vista="modificar"] form input[type="radio"]:checked').val();

    let nuevo_card = $("<div></div>");
    $('[data-modificando]').remove();
    
    
    if (estado === "cursando") {
        nuevo_card.addClass("card mb-3 px-3 py-3 bg-light border-0 rounder shadow-sm")
              .html(`<h2 class="card-title text-center fs-3 bg-black text-white">${materia}</h2>
              <div class="card-body container row">
                  <div class="col uno">
                      <p class="nota-1-card">${nota_1}</p>
                      <p class="nota-2-card">${nota_2}</p>
                      <p class="nota-3-card">${nota_3}</p>
                  </div>
                  <div class="col dos">
                      <p class="profesor-card">${profesor}</p>
                      <p class="horario-card">${horario}</p>
                      <p class="aula-card fw-bold">${aula}</p>
                  </div></div>
              <div class="botones d-flex justify-content-end">
                  <a href="#" class="mx-0 modificar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a>
                  <a href="#" class="mx-3 eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a>              
          </div>`);

        $("#materias_cursando").prepend(nuevo_card);
        $("[data-vista]").css("display", "none");
        $('[data-vista="cursando"]').css("display", "block");
    } else if (estado === "restantes") {
        nuevo_card.addClass("card mb-3 px-3 py-3 bg-light rounder shadow-sm border-0")
              .html(`<h2 class="card-title text-center fs-3 bg-warning text-white">${materia}</h2>
              <div class="container row">
                  <div class="col">
                      <p class="profesor-card">${profesor}</p>
                      <p class="horario-card">${horario}</p>
                      <p class="fw-bold aula-card">${aula}</p>
                  </div></div>
              <div class="d-flex justify-content-end">
                  <a href="#" class="mx-0 modificar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a>
                  <a href="#" class="mx-3 eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a>            
          </div>`);

        $("#materias_restantes").prepend(nuevo_card);
        $("[data-vista]").css("display", "none");
        $('[data-vista="restantes"]').css("display", "block");
    } else {
        nuevo_card.addClass("card mb-3 px-3 py-3 col-5 d-flex bg-light border-0 rounder shadow-sm")
              .html(`<h2 class="card-title text-center fs-3 bg-success text-white">${materia}</h2>
              <div class="card-body container row">
                  <div class="col dos">
                      <p class="nota-1-card">${nota_1}</p>
                      <p  class="nota-2-card">${nota_2}</p>
                      <p  class="nota-3-card">${nota_3}</p>
                  </div>
                  <div class="col uno">
                      <p class="profesor-card">${profesor}</p>
                      <p class="horario-card">${horario}</p>
                      <p Aula class="fw-bold aula-card">${aula}</p>
                  </div></div>
              <div class="d-flex justify-content-end">
                  <a href="#" class="mx-0 modificar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></a>
                  <a href="#" class="mx-3 eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="eliminar bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a> 
          </div>`);

        $("#materias_cursadas").prepend(nuevo_card);
        $("[data-vista]").css("display", "none");
        $('[data-vista="cursadas"]').css("display", "block");
    }

    $('[data-vista="modificar"] form')[0].reset();
    guardarMaterias();
    return false;
});



