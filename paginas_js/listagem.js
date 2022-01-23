$("#quarto1").mousedown(function(){

	$("#quarto").text('1')
	$("#intervalo").text('a1,a2,a3')

	let quarto = $("#quarto").text()
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	if(quarto != 1){
		console.log('Quarto Inválido')
	} else {
		if(tipos.includes(tipo)){
			mostraPrateleira(quarto)
		} else (
			console.log('inapto')
		)
	}

});

$("#quarto2").mousedown(function(){

	$("#quarto").text('2')
	$("#intervalo").text('a4,a5,a6')

	let quarto = $("#quarto").text()
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	if(quarto != 2){
		console.log('Quarto Inválido')
	} else {
		if(tipos.includes(tipo)){
			mostraPrateleira(quarto)
		} else (
			console.log('inapto')
		)
	}
    
});

function mostraPrateleira(numeroQuarto){
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
		 							 	  '<td><button onclick="removeVeiculo(\''+ quarto +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}

var tempoDeEspera = 10 * 10 * 100;
var timeout = setTimeout(inativo, tempoDeEspera);

function actividade(e) {
  clearInterval(timeout);
  timeout = setTimeout(inativo, tempoDeEspera);
  // só para o exemplo
  console.log('Houve actividade de ' + (e.type == 'keyup' ? 'teclado' : 'ponteiro'));
}

function inativo() {
	$("#quarto").text('0')
	$("#intervalo").text('0')
	var prateleiraResultado = document.getElementById('listaprodutos')
	prateleiraResultado.innerHTML = '';
}

['keyup', 'touchmove' in window ? 'touchmove' : 'mousemove', "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll"].forEach(function(ev) {
  window.addEventListener(ev, actividade);
});