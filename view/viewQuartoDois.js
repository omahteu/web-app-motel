import { mostraPrateleira } from "../armazenamento/exibicao.js"

$("#quarto2").mousedown(function(){

	$("#quarto").text('2')
	$("#intervalo").text('a4,a5,a6')

	let quarto = $("#quarto").text()
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	if(quarto != 2){
		console.log('')
	} else {
		if(tipos.includes(tipo)){
			mostraPrateleira(quarto)
		} else (
			console.log('')
		)
	}
    
});
