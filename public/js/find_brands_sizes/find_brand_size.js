function filterSizeBrand(shoesStock){
    
    for(i = 0; i < shoesStock.length; i++){
        
        var brand = shoesStock[i].brand;
        
        var size = shoesStock[i].size;
        
    };
    
    
    $('#selectBrandList').on('click', function(e){
        
        brands_sizes_array.length = 0;
            
        var selectedBrand = e.target.innerText;
        
        var displayBrandSize = display_brand_size();  
        
        var brandData = get_brands(selectedBrand);
        
        for (i=0; i<shoesStock.length; i++){
            var brand = shoesStock[i].brand;
            var size = shoesStock[i].size
            
            if(selectedBrand === brand){
            sizes_for_brand_array.push(size);
            
            }
        }
            
        allSizes.innerHTML = allSizesTemplateInstance({size: sizes_for_brand_array});
        
        $('#selectSizes').on('click', function(f){
            
            brands_sizes_array.length = 0;
            
            var selectedSize = f.target.innerText;
            
            var brands_sizes_data = get_brands_sizes(selectedBrand, selectedSize )
            
        });
    });
};
