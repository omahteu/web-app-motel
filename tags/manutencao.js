export function manutencao(q, x, y, z) {
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
