import { mostraPrateleira } from "./exibicao.js"
import { mostraGaragem } from "./exibicao.js"

export function registrarProdutos(){

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

	mostraPrateleira()

}

export function registrarVeiculos(){

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

	mostraGaragem()

}
