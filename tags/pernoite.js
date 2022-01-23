export function pernoite(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#8B008B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    $("[id=tempo]").text(String(hora) + ':' + String(minutos))

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
