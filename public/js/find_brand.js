function find_brand(){
    $('#selectBrandName').on('click', function(e){
        var selectedBrand = e.target.parentElement.innerText;
        
        $.ajax({
            type: 'GET',
            url:'http://localhost:9001/api/shoes/brands/' + selectedBrand,
            success: function(shoes){
                $.each(shoes,function(i,shoes){
                       allShoes.innerHTML = allShoesTemplateInstance({stock: shoes});
            });
        }
               });
    });
}




