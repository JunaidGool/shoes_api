function find_brand(){
    $('#selectBrandName').on('click', function(e){
        
        var selectedBrand = e.target.innerText;
        
        if(selectedBrand != "all"){
            
            var brandData = get_brands(selectedBrand);

        } else {
            
            view_all_shoes();
        };
    });
};
