$(".tarja").click(function(){
    var botao = $(this).text()
    // console.log(btn)


    switch (botao) {
        case 'Quartos':
            window.open('../paginas/quartos.html', '_blank');
            break;
        
        case 'Cadastros':
            window.open('../paginas/cadastros.html', '_blank');
            break

        case 'Relatórios':
            window.open('../paginas/cadastros.html', '_blank');
            break
    
        default:
            break;
    }










})