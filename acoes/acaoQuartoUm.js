import { triagem } from "../tags/triagem.js"
import { quartoum } from "../boxes/box.js"

$("#" + quartoum[0]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
    
})

$("#" + quartoum[1]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + quartoum[2]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})
