function display_stock(){
    
    $('#viewStock').on('click', function(e){
        
        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSizes');
        var shoeList = document.getElementById('shoeList');
        var selectBrandList = document.getElementById('selectBrandList');
        
        addStockDisplay.style.visibility = "hidden";
        selectBrandName.style.visibility = "visible";
        selectSizes.style.visibility = "visible";
        shoeList.style.display = "block";
        selectBrandList.style.display = "none";
        
    }); 
};