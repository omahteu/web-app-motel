modos = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']

$(".reservado").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        $("#intervalo").text(modos.slice(0, 3))
        reservado(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".limpeza").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        limpeza(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".aguardando").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        aguardando(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".manutencao").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        manutencao(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".pernoite").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        pernoite(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".locado").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        locado(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".faxina").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        faxina(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".disponivel").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        disponivel(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
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

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Pernoite')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Alterar P/ Locação')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('reservado')
    $("#entrada").text(String(hora) + ':' + String(minutos))
}

function limpeza(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#F0E68C",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('limpeza')
}

function aguardando(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#DAA520",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Limpeza')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('aguardando')
}

// necessário alterar o id, ou buscar pela class

function manutencao(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#A9A9A9",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Faxina')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Disponibilizar Quarto')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Ligar Luz')

    $("#quarto").text(q)
    $("#tipo").text('manutencao')
}

function pernoite(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#8B008B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Locação')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('pernoite')
}

function locado(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FF0000",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Pernoite')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('locado')
}

function faxina(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FFE4C4",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('faxina')
}

function disponivel(q, x, y, zv) {
    $("#quarto" + q).css({
        "background-color": "#008B8B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $(".pes").prop("disabled", true)
    $(".cod").prop("disabled", true)
    $(".des").prop("disabled", true)
    $(".qtd").prop("disabled", true)
    $(".vun").prop("disabled", true)
    $(".ser").prop("disabled", true)
    $(".tot").prop("disabled", true)

    $("#quarto").text(q)
    $("#tipo").text('disponivel')
}
