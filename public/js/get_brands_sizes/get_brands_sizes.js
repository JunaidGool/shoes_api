function get_brands_sizes(selectedBrand, selectedSize){
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:9001/api/shoes/brands/' + selectedBrand + '/sizes/' + selectedSize,
        success: function(shoes){
            
            var filterBrandSizesData = filterBrandsAndsizes(shoes, selectedBrand);
            
            allShoes.innerHTML = allShoesTemplateInstance({stock: brands_sizes_array});
            
            brands_sizes_array.length = 0;
            
        }
    });   
};