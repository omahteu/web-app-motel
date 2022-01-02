function disponivel() {
    $("#quarto1").css({
        "background-color": "#008B8B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq1]").css('visibility', 'hidden')

    $(".pes").prop("disabled", true)
    $(".cod").prop("disabled", true)
    $(".des").prop("disabled", true)
    $(".qtd").prop("disabled", true)
    $(".vun").prop("disabled", true)
    $(".ser").prop("disabled", true)
    $(".tot").prop("disabled", true)

    $("#fimquarto1").css('visibility', 'visible')
}

function disponivel_desfaz() {
    $('#quarto1'). removeAttr('style')

    $("[id=botaoq1]").css('visibility', 'visible')

    $(".pes").prop("disabled", false)
    $(".cod").prop("disabled", false)
    $(".des").prop("disabled", false)
    $(".qtd").prop("disabled", false)
    $(".vun").prop("disabled", false)
    $(".ser").prop("disabled", false)
    $(".tot").prop("disabled", false)

    $("#fimquarto1").css('visibility', 'hidden')
}
