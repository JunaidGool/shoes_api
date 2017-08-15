function find_size(){
    $('#selectSizes').on('click', function(e){
        
        var selectedSize = e.target.innerText;
        
        if(selectedSize != "all"){
            
            var sizeData = get_sizes(selectedSize);
            
        } else {
            
            view_all_shoes()  
        }
    });
};
