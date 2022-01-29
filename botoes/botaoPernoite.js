import { pernoite } from "../tags/pernoite.js"
import { modos } from "../boxes/box.js"
import { index } from "../tags/particao.js"

$(".pernoite").click(function(){
    var quarto = $(this).attr('name')

    switch(quarto){
        case '1':
            var flags = modos.slice(0, 3)
            pernoite(quarto, flags[0], flags[1], flags[2])
            index()
            break
        case '2':
            var flags = modos.slice(3, 6)
            pernoite(quarto, flags[0], flags[1], flags[2])
            index()
            break
    }
})
