$("#guardara").click(function(){
    var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		registroVeiculo()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)
})

function registroVeiculo(){

	var quarto =  $("#quarto").text()
	var veiculo = $("#tipoVeiculo").val()
    var modelo = $("#modelo").val()
    var placa = $("#placa").val()

	var patio = {
		quarto: quarto,
		veiculo: veiculo,
		modelo: modelo,
		placa: placa
    }

	console.log(patio)

	if(localStorage.getItem('garagem') === null){
		var patios = [];
		patios.push(patio);
		localStorage.setItem('garagem', JSON.stringify(patios));
	} else {
		var patios = JSON.parse(localStorage.getItem('garagem'));
		patios.push(patio);
		localStorage.setItem('garagem', JSON.stringify(patios));
	}

	document.getElementById('formLogin').reset();

	mostraVeiculo();

}

function removeVeiculo(placa){
	var patio = JSON.parse(localStorage.getItem('garagem'))

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].placa == placa){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('garagem', JSON.stringify(patio));

	mostraVeiculo();
}

function mostraVeiculo(){

	var dados_garagem = JSON.parse(localStorage.getItem('garagem'))
	var patio = document.getElementById('garagem')
	patio.innerHTML = ''

	for(var i = 0; i < dados_garagem.length; i++){

		var quarto =  dados_garagem[i].quarto
		var veiculo =  dados_garagem[i].veiculo
		var modelo = dados_garagem[i].modelo
		var placa = dados_garagem[i].placa

		patio.innerHTML += '<tr><td hidden>'+ quarto + '</td>'+
		 						'<td>'+ veiculo + '</td>' +
								'<td>'+ modelo + '</td>' +
								'<td>'+ placa + '</td>' +
		 						'<td><button onclick="removeVeiculo('+ placa +')" class="btn btn-danger">Remover</button></td>'+
		 					'</tr>';
	}
}
