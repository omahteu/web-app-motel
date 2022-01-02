modos = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']

$(".reservado").click(function(){
    var quarto = $(this).attr('name')

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        reservado(quarto, box[0], box[1], box[2])
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

    $(".pes").prop("disabled", true)
    $(".cod").prop("disabled", true)
    $(".des").prop("disabled", true)
    $(".qtd").prop("disabled", true)
    $(".vun").prop("disabled", true)
    $(".ser").prop("disabled", true)
    $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')
}
