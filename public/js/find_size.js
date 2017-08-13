function find_size(){
    $('#selectSizes').on('click', function(e){
    var selectedSize = e.target.parentElement.innerText;
        
        $.ajax({
            type: 'GET',
            url: 'http://localhost:9001/api/shoes/sizes/' + selectedSize,
            success: function(shoes){
                $.each(shoes,function(i,shoes){
                    allShoes.innerHTML = allShoesTemplateInstance({stock:shoes})
                });
            }
        });
    
//    $.get('http://localhost:9001/api/shoes/sizes/' + selectedSize, find_size)
});
    
};
