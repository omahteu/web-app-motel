export function aguardando(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#DAA520",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    $("[id=tempo]").text(String(hora) + ':' + String(minutos))

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Limpeza')

    // $("#" + y).css('visibility', 'visible')
    // $("#" + y).val('Alterar P/ Locação')

    // $("#" + z).css('visibility', 'visible')
    // $("#" + z).val('Cancelar Reserva')

    $("#quarto").text(q)
    $("#tipo").text('aguardando')
    $("#intervalo").text(x + "," + y + "," + z)
    $("#entrada").text(String(hora) + ':' + String(minutos) + 'h')
}
