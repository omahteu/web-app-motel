export function desfazer(q, x, y, z) {
    $('#quarto' + q). removeAttr('style')

    $("[id=botaoq" + q + "]"). removeAttr('style')

    $("#" + x). removeAttr('style')
    $("#" + x).val('')

    $("#" + y). removeAttr('style')
    $("#" + y).val('')

    $("#" + z). removeAttr('style')
    $("#" + z).val('')

    $("#tempo").text("00:00:00")
    $("#quarto").text('0')
    $("#tipo").text('0')
    $("#entrada").text('')
    $("#valor-quarto").text('0')
    $("#intervalo").text("0")

    var prateleiraResultado = document.getElementById('lprodutos')
	prateleiraResultado.innerHTML = '';
    
    var garagemResultado = document.getElementById('garagem')
	garagemResultado.innerHTML = '';
}
