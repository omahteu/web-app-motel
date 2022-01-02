function manutencao() {
    $("#quarto1").css({
        "background-color": "#A9A9A9",
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
    btn_manutencaoa2()
    $("#a2").css('visibility', 'visible')
    btn_manutencaoa3()
    $("#a3").css('visibility', 'visible')
}

function btn_manutencao() {
    document.getElementById("fimquarto1").value = 'Iniciar Faxina'
}

function btn_manutencaoa2() {
    document.getElementById("a2").value = 'Disponibilizar Quarto'
}

function btn_manutencaoa3() {
    document.getElementById("a3").value = 'Acender Luz'
}

function manutencao_desfaz() {
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
    $('#a2'). removeAttr('style')
    $('#a3'). removeAttr('style')
}
