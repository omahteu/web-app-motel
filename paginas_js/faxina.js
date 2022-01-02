function faxina() {
    $("#quarto1").css({
        "background-color": "#FFE4C4",
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

   
    $("#fimquarto1").css('visibility', 'hidden')
    //$('#a2'). removeAttr('style')
    //$('#a3'). removeAttr('style')

    //$("#fimquarto1").css('visibility', 'visible')
}

function faxina_desfaz() {
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


function faxina2() {
    $("#quarto1").css({
        "background-color": "#FFE4C4",
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

   
    $("#fimquarto1").css('visibility', 'hidden')
    $('#a2'). removeAttr('style')
    $('#a3'). removeAttr('style')
    faxina()
    //$("#fimquarto1").css('visibility', 'visible')
}