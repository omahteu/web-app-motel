modos = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']

// criar uma forma de passar o intervalo para cá

$("#" + modos[0]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()

    triagem(acao, quarto, 'a1', 'a2', 'a3')
})

$("#" + modos[1]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()

    triagem(acao, quarto, 'a1', 'a2', 'a3')
})

$("#" + modos[2]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()

    triagem(acao, quarto, 'a1', 'a2', 'a3')
    
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

}

function pernoitx(q, x, y, z) {
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

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#quarto").text(q)
    $("#tipo").text('locado')
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
    }
}
