import { faxina } from "../tags/faxina.js"
import { modos } from "../boxes/box.js"

$(".faxina").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var flags = modos.slice(0, 3)
            faxina(quarto, flags[0], flags[1], flags[2])
            break
        case '2':
            var flags = modos.slice(3, 6)
            faxina(quarto, flags[0], flags[1], flags[2])
            break
    }
})
