// $("#quarto1").click(function(){
// 	let quarto = $("#quarto").text()
// 	// let tipo = $("#tipo").text()
// 	// let intervalo = $("#intervalo").text()

//     $("#quarto").text('1')
//     // $("#tipo").text()
// })



// var elemento = document.getElementById('quarto1'); // escolher o elemento
// elemento.addEventListener('mouseover', tata); // adicionar o oscultador




$( "#quarto1" ).mouseover(function() {
    mostraPrateleira()
});

$( "#quarto1" ).mouseleave(function() {
    var prateleiraResultado = document.getElementById('listaprodutos')
    prateleiraResultado.innerHTML = '';
});


function mostraPrateleira(){
	var lista = JSON.parse(localStorage.getItem('produtos'));
	var prateleiraResultado = document.getElementById('listaprodutos')

	prateleiraResultado.innerHTML = '';

	let dados = lista.filter(quartos => quartos.quarto == 1)
	

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
