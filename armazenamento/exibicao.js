export function mostraPrateleira(numeroQuarto){
	var lista = JSON.parse(localStorage.getItem('produtos'));
	var prateleiraResultado = document.getElementById('listaprodutos')

	prateleiraResultado.innerHTML = '';

	let dados = lista.filter(quartos => quartos.quarto == numeroQuarto)
	
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
		 							 	  '<td><button onclick="removeProduto(\''+ quarto +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}

export function mostraGaragem(numeroQuarto){
	var lista = JSON.parse(localStorage.getItem('garagem'));
	var prateleiraResultado = document.getElementById('garagem')

	prateleiraResultado.innerHTML = '';

	let dados = lista.filter(quartos => quartos.quarto == numeroQuarto)
	
	for(var i = 0; i < dados.length; i++){

		var quarto = dados[i].quarto;
		var veiculo = dados[i].veiculo;
		var modelo = dados[i].modelo;
		var placa = dados[i].placa;
		prateleiraResultado.innerHTML += '<tr><td>'+ quarto + '</td>'+
		 							 	  '<td>'+ veiculo + '</td>' +
										  '<td>'+ modelo + '</td>' +
										  '<td>'+ placa + '</td>' +
		 							 	  '<td><button onclick="removeVeiculo(\''+ quarto +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}
