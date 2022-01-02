modos = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']

$(".reservado").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        reservado(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".limpeza").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        limpeza(quarto, box[0], box[1], box[2])
    } else (
        console.log('maior')
    )
})

$(".aguardando").click(function(){
    var quarto = $(this).attr('name')

    // substituir o if por switch

    if(quarto === '1'){
        var box = modos.slice(0, 3)
        aguardando(quarto, box[0], box[1], box[2])
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

    // $(".pes").prop("disabled", true)
    // $(".cod").prop("disabled", true)
    // $(".des").prop("disabled", true)
    // $(".qtd").prop("disabled", true)
    // $(".vun").prop("disabled", true)
    // $(".ser").prop("disabled", true)
    // $(".tot").prop("disabled", true)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    $("#quarto").text(q)
    $("#tipo").text('reservado')
}

function limpeza(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#F0E68C",
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
}

function aguardando(q, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#DAA520",
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
}

// necessário alterar o id, ou buscar pela class

