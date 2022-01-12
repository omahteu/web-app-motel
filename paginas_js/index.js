modos = ['a1', 'a2', 'a3']
modosDois = ['a4', 'a5', 'a6']


$(".reservado").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            reservado(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            reservado(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".limpeza").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            limpeza(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            limpeza(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".aguardando").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            aguardando(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            aguardando(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".manutencao").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            manutencao(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            manutencao(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".pernoite").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            pernoite(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            pernoite(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".locado").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            locado(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            locado(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".faxina").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            faxina(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            faxina(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

$(".disponivel").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var box = modos.slice(0, 3)
            reservado(quarto, box[0], box[1], box[2])
            break
        case '2':
            var boxDois = modosDois.slice(0, 3)
            console.log(boxDois)
            reservado(quarto, boxDois[0], boxDois[1], boxDois[2])
            break
    }
})

function reservado(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#1E90FF",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();


    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Pernoite')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Alterar P/ Locação')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('reservado')
    $("#entrada").text(String(hora) + ':' + String(minutos))
    $("#intervalo").text(x + "," + y + "," + z)
}

function limpeza(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#F0E68C",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('limpeza')
    $("#intervalo").text(x + "," + y + "," + z)
}

function aguardando(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#DAA520",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Limpeza')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('aguardando')
    $("#intervalo").text(x + "," + y + "," + z)
}

function manutencao(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#A9A9A9",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Faxina')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Disponibilizar Quarto')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Ligar Luz')

    $("#quarto").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(x + "," + y + "," + z)
}

function pernoite(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#8B008B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();


    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    $("#entrada").text(String(hora) + ':' + String(minutos))

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Locação')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('pernoite')
    $("#intervalo").text(x + "," + y + "," + z)
}

function locado(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FF0000",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();


    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    $("#entrada").text(String(hora) + ':' + String(minutos))

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Pernoite')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('locado')
    $("#intervalo").text(x + "," + y + "," + z)
}

function faxina(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FFE4C4",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('faxina')
    $("#intervalo").text(x + "," + y + "," + z)
}

function disponivel(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#008B8B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#quarto").text(q)
    $("#tipo").text('disponivel')
}
