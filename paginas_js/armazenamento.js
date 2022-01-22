$("#salvar").click(function(){
	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		cadastrarProdutos()
	} else (
		alert('Escolha um tipo')
	)

})

$("#guardara").click(function(){
    cadastrarGaragem()
})

$("#quarto1").click(function(){
	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()
	var quarto = $("#quarto").text()

	if(tipos.includes(tipo)){
		var palavras = $("#listaprodutos").text()
		if(palavras.length === 0){
			mostraPrateleira()
		} else (
			console.log('passa')
		)
	} else (
		console.log('passa')
	)
})

$("#quarto2").click(function(){
	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		var palavras = $("#listaprodutos").text()
		if(palavras.length === 0){
			mostraPrateleira()
		} else (
			console.log('passa2')
		)
	} else (
		console.log('passa2')
	)
})

function cadastrarProdutos(){

	var quarto =  $("#quarto").text()
    var codigo = $(".cod").val()
    var descricao = $(".des").val()
    var quantidade = $(".qtd").val()
    var valorUnitario = $(".vun").val()
    var valorTotal = $(".tot").val()

	var dado = {
		quarto: quarto,
		codigo: codigo,
		descricao: descricao,
		quantidade: quantidade,
		valorUnitario: valorUnitario,
        valorTotal: valorTotal
	};

	if(localStorage.getItem('produtos') === null){
		var dados = [];
		dados.push(dado);
		localStorage.setItem('produtos', JSON.stringify(dados));
	} else {
		var dados = JSON.parse(localStorage.getItem('produtos'));
		dados.push(dado);
		localStorage.setItem('produtos', JSON.stringify(dados));
	}

	document.getElementById('produtos').reset();

	mostraPrateleira();

}

function cadastrarGaragem(){

	var quarto =  $("#quarto").text()
    var veiculo = $("#tipoVeiculo").val()
    var modelo = $("#modelo").val()
    var placa = $("#placa").val()

    var dadoGaragem = {
		quarto: quarto,
        veiculo: veiculo,
        modelo: modelo,
        placa: placa
    }

    if(localStorage.getItem('garagem') === null){
		var dados = [];
		dados.push(dadoGaragem);
		localStorage.setItem('garagem', JSON.stringify(dados));
	} else {
		var dados = JSON.parse(localStorage.getItem('garagem'));
		dados.push(dadoGaragem);
		localStorage.setItem('garagem', JSON.stringify(dados));
	}

	document.getElementById('formLogin').reset();

}

function removeVeiculo(quarto){
	var patio = JSON.parse(localStorage.getItem('patio'));
	console.log(patio);

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].placa == placa){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('patio', JSON.stringify(patio));

	mostraPatio();
}

function mostraPrateleira(){
	var veiculos = JSON.parse(localStorage.getItem('produtos'));
	var prateleiraResultado = document.getElementById('listaprodutos')

	prateleiraResultado.innerHTML = '';

	let dados = veiculos.filter(quartos => quartos.quarto == 1)
	

	for(var i = 0; i < dados.length; i++){

		var quarto = dados[i].quarto;
		var codigo = dados[i].codigo;
		var descricao = dados[i].descricao;
		var quantidade = dados[i].quantidade;
		var valorUnitario = dados[i].valorUnitario;
		var valorTotal = dados[i].valorTotal;
		prateleiraResultado.innerHTML += '<tr><td>'+ quarto + '</td>'+
		 							 	  '<td>'+ codigo + '</td>' +
										  '<td>'+ descricao + '</td>' +
										  '<td>'+ quantidade + '</td>' +
										  '<td>'+ valorUnitario + '</td>' +
										  '<td>'+ valorTotal + '</td>' +
		 							 	  '<td><button onclick="removeVeiculo(\''+ quarto +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}

function mostraPatio(){
	var veiculos = JSON.parse(localStorage.getItem('patio'));
	var patioResultado = document.getElementById('resultados');

	patioResultado.innerHTML = '';

	for(var i = 0; i < veiculos.length; i++){
		var modelo = veiculos[i].modelo;
		var placa = veiculos[i].placa;
		var hora = veiculos[i].hora;
		var minutos = veiculos[i].minutos;
		 patioResultado.innerHTML += '<tr><td>'+ modelo + '</td>'+
		 							 	  '<td>'+ placa + '</td>' +
		 							 	  '<td>'+ hora + ':' + minutos + '</td>' +
		 							 	  '<td><button onclick="removeVeiculo(\''+ placa +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}
