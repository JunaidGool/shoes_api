function select_brand(){
    $('#selectBrandList').on('click', function(e){
        var shoeList = document.getElementById('shoeList');
        var selectBrandList = document.getElementById('selectBrandList');
        var selectSizes = document.getElementById('selectSizes');
        var selectedBrand = e.target.innerText;
        
        shoeList.style.display = "block";
        selectSizes.style.visibility = "visible";
        selectBrandList.style.display = "none";
        
        var brandData = get_brands(selectedBrand);
        
    });
};

