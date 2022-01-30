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

var indexes = []

for (const property in produtos) {
    indexes.push(property)
}

indexes.forEach(function(item){
    $('#cod').append('<option>' + item + '</option>');
});

$('#cod').change(function() {
    var option = $('#cod').find(":selected").index();

    $("#des").val(produtos[option]['descrição'])
    $("#vun").val('R$ ' + produtos[option]['valor'])

    $('#qtd').keyup(function(){
        var qtd = $(this).val()
        var total = Number(produtos[option]['valor']) * Number(qtd)
        $("#tot").val('R$ ' + total)

    });
});
