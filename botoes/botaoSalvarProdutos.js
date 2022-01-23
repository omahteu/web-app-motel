import { registrarProdutos } from "../armazenamento/registros.js"

$("#salvar").click(function(){
	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		registrarProdutos()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)

})
