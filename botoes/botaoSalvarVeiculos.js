// import { registrarVeiculos } from "../armazenamento/registros.js"

$("#guardara").click(function(){
    var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		registrarVeiculos()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)
})
