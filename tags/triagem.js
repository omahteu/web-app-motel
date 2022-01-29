import { desfazer } from "./desfazer.js"
import { pernoite } from "./pernoite.js"
import { locado } from "./locacao.js"
import { limpeza } from "./limpeza.js"
import { faxina } from "./faxina.js"
import { index } from "./particao.js"

export function triagem(acao, quarto, x, y, z){

    switch(acao){
        case "Disponibilizar Quarto":
            confirm("Certeza que deseja encerrar" + quarto + "?")
            desfazer(quarto, x, y, z)
            break
        case "Cancelar Reserva":
            desfazer(quarto, x, y, z)
            break
        case "Encerrar":

            if (confirm("Deseja encerrar o quarto " + quarto + "?") == true) {
                desfazer(quarto, x, y, z)
              } else {
                // pass
              }

            break
        case "Iniciar Pernoite":
            pernoite(quarto, x, y, z)
            index()
            break
        case "Iniciar Locação":
            locado(quarto, x, y, z)
            break
        case "Iniciar Limpeza":
            limpeza(quarto, x, y, z)
            break
        case "Iniciar Faxina":
            faxina(quarto, x, y, z)
            break
    }
}
