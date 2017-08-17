function display_add_stock(){
    $('#addStockDisplay').on('click', function(e){
        
        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSizes');
        var shoeList = document.getElementById('shoeList');
        
        addStockDisplay.style.visibility = "visible";
        selectBrandName.style.visibility = "hidden";
        selectSizes.style.visibility = "hidden";
        shoeList.style.display = "none";
        
    });
};

function display_brands(){
    $('#viewBrands').on('click', function(e){
        
        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSizes');
        var shoeList = document.getElementById('shoeList');
        
        addStockDisplay.style.visibility = "hidden";
        selectBrandName.style.visibility = "hidden";
        selectSizes.style.visibility = "hidden";
        shoeList.style.display = "none";
        brandList.style.display = "block";
    
    });
};

function display_brand_size(){
    
    var shoeList = document.getElementById('shoeList');
    var selectBrandList = document.getElementById('selectBrandList');
    var selectSizes = document.getElementById('selectSizes');
    shoeList.style.display = "block";
    selectSizes.style.visibility = "visible";
    selectBrandList.style.display = "none";

}
