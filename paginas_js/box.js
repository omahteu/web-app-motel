modos = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']

// criar uma forma de passar o intervalo para cá

$("#" + modos[0]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    console.log(quarto, acao)
})

$("#" + modos[1]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    console.log(quarto, acao)
})

$("#" + modos[2]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    console.log(quarto, acao)
    desfazer(quarto, 'a1')
})

function desfazer(q, x, y, z) {
    $('#quarto' + q). removeAttr('style')

    $("[id=botaoq" + q + "]").css('visibility', 'visible')


}
