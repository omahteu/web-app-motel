produtos = {
    '1' : {
        'descrição': 'Água Mineral',
        'valor': 2.00
    },

    '2' : {
        'descrição': 'Guaraná 350 ml',
        'valor': 2.50
    },

    '3' : {
        'descrição': 'Redbull',
        'valor': 7.35
    }
}


for (const property in produtos) {
console.log(property);
}

var cidades = [
    'São Paulo',
    'Rio de Janeiro',
    'Bahia'];

cidades.forEach(function(item){
    $('.cod').append('<option>' + item + '</option>');
});

$('#myselect').change(function() {
    var option = $('#myselect').find(":selected").index();
    console.log(produtos[option]);
    });