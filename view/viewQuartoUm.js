import { mostraPrateleira } from "../armazenamento/exibicao.js"
import { mostraGaragem } from "../armazenamento/exibicao.js"


$("#quarto1").mousedown(function(){

	$("#quarto").text('1')
	$("#intervalo").text('a1,a2,a3')

	let quarto = $("#quarto").text()
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	if(quarto != 1){
		//pass
	} else {
		if(tipos.includes(tipo)){
			mostraPrateleira(quarto)
			mostraGaragem(quarto)
		} else (
			console.log('')
		)
	}
});

// FAZER VERIFICAÇÃO DE ESTÁ PERNOITE OU LOCADO