function get_sizes(selectedSize){
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:9001/api/shoes/sizes/' + selectedSize,
        success: function(shoes){
            $.each(shoes,function(i,shoes){
                allShoes.innerHTML = allShoesTemplateInstance({stock:shoes})
            });
        }
    });   
}