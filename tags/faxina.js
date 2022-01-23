export function faxina(q, x, y, z) {
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
