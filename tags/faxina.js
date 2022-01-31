export function faxina(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#FFE4C4",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    $("[id=tempo]").text(String(hora) + ':' + String(minutos))

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Disponibilizar Quarto')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('faxina')
    $("#intervalo").text(x + "," + y + "," + z)
    $("#entrada").text(String(hora) + ':' + String(minutos) + 'h')
    $("#imagemQuarto" + q).css('border', '2px solid rgb(255, 228, 196)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(255, 228, 196), 0 0 1em #000')
}
