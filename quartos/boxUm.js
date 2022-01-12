modos = ['a1', 'a2', 'a3']

$("#" + modos[0]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var modus = $("#intervalo").text().split(",")
    triagem(acao, quarto, modus[0], modus[1], modus[2])
    
})

$("#" + modos[1]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var modus = $("#intervalo").text().split(",")
    triagem(acao, quarto, modus[0], modus[1], modus[2])
})

$("#" + modos[2]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var modus = $("#intervalo").text().split(",")
    triagem(acao, quarto, modus[0], modus[1], modus[2])
})

function desfazer(q, x, y, z) {
    $('#quarto' + q). removeAttr('style')

    $("[id=botaoq" + q + "]"). removeAttr('style')

    $("#" + x). removeAttr('style')
    $("#" + x).val('')

    $("#" + y). removeAttr('style')
    $("#" + y).val('')

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#quarto").text('0')
    $("#tipo").text('0')
    $("#entrada").text('')
    $("#valor-quarto").text('0')
    $("#intervalo").text("0")
}

function pernoitx(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#8B008B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Locação')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#quarto").text(q)
    $("#tipo").text('pernoite')
}

function locadx(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FF0000",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Pernoite')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#quarto").text(q)
    $("#tipo").text('locado')
}

function limpezx(q, x, y, z) {
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
}

function faxinx(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FFE4C4",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    $("#" + y). removeAttr('style')
    $("#" + y).val('')

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#quarto").text(q)
    $("#tipo").text('faxina')
}

function triagem(acao, quarto, x, y, z){

    switch(acao){
        case "Disponibilizar Quarto":
            desfazer(quarto, x, y, z)
            break
        case "Cancelar Reserva":
            desfazer(quarto, x, y, z)
            break
        case "Encerrar":
            desfazer(quarto, x, y, z)
            break
        case "Alterar P/ Pernoite":
            pernoitx(quarto, x, y, z)
            break
        case "Alterar P/ Locação":
            locadx(quarto, x, y, z)
            break
        case "Iniciar Limpeza":
            limpezx(quarto, x, y, z)
            break
        case "Iniciar Faxina":
            faxinx(quarto, x, y, z)
            break
    }
}
