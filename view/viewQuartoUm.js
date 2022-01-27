function mostraProduto(){

	var nQuarto =  $("#quarto").text()
	var dados_produtos = JSON.parse(localStorage.getItem('produtos'))
	var prateleira = document.getElementById('lprodutos');
	prateleira.innerHTML = '';

	
	var dados = dados_produtos.filter(quartos => quartos.quarto == nQuarto)

	for(var i = 0; i < dados.length; i++){

		var operacao =  dados[i].operacao
		var quarto =  dados[i].quarto
		var codigo = dados[i].codigo
		var descricao = dados[i].descricao
		var quantidade = dados[i].quantidade
		var valorUnitario = dados[i].valor_unitario
		var valorTotal = dados[i].valor_total

		prateleira.innerHTML += '<tr><td hidden>'+ operacao + '</td>'+
		 							'<td>'+ quarto + '</td>' +
									'<td>'+ codigo + '</td>' +
									'<td>'+ descricao + '</td>' +
									'<td>'+ quantidade + '</td>' +
									'<td>'+ valorUnitario + '</td>' +
									'<td>'+ valorTotal + '</td>' +
		 							'<td><button onclick="removeProduto('+ operacao +')" class="btn btn-danger">Remover</button></td>'+
		 						'</tr>';
	}
}


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
			mostraProduto()
			// mostraGaragem(quarto)
		} else (
			console.log('')
		)
	}
});

// FAZER VERIFICAÇÃO DE ESTÁ PERNOITE OU LOCADO
