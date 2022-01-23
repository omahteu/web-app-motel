import { triagem } from "../tags/triagem.js"
import { quartodois } from "../boxes/box.js"

$("#" + quartodois[0]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
    
})

$("#" + quartodois[1]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})

$("#" + quartodois[2]).click(function(){
    var quarto = $("#quarto").text()
    var acao = $(this).val()
    var flags = $("#intervalo").text().split(",")
    triagem(acao, quarto, flags[0], flags[1], flags[2])
})
