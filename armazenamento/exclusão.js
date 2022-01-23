import { mostraPrateleira } from "./exibicao.js"
import { mostraGaragem } from "./exibicao.js"

export function removeProduto(codigo){
	var prateleira = JSON.parse(localStorage.getItem('produtos'));

	 for(var i = 0 ; i < prateleira.length; i++){
		if(prateleira[i].codigo == codigo){
			prateleira.splice(i, 1);
		}
	}

	localStorage.setItem('produtos', JSON.stringify(prateleira));

	mostraPrateleira()
}

export function removeVeiculo(placa){
	var patio = JSON.parse(localStorage.getItem('garagem'));

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].placa == placa){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('garagem', JSON.stringify(patio));

	mostraGaragem();
}
