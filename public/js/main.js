var allShoes = document.querySelector('.allShoes');
var allBrands = document.querySelector('.allBrands');
var allSizes = document.querySelector('.allSizes');

var allShoesTemplate = document.querySelector('.allShoesTemplate');
var allShoesTemplateInstance = Handlebars.compile(allShoesTemplate.innerHTML);

var allBrandsTemplate = document.querySelector('.allBrandsTemplate');
var allBrandsTemplateInstance = Handlebars.compile(allBrandsTemplate.innerHTML)

var allSizesTemplate = document.querySelector('.allSizesTemplate');
var allSizesTemplateInstance = Handlebars.compile(allSizesTemplate.innerHTML);

var brand = document.getElementById('brand');
var color = document.getElementById('color');
var size = document.getElementById('size');
var price = document.getElementById('price');
var in_stock = document.getElementById('in_stock');


    $('#addStockDisplay').on('click', function(e){
        
        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSizes');
        var shoeList = document.getElementById('shoeList');
        
        addStockDisplay.style.visibility = "visible";
        selectBrandName.style.visibility = "hidden";
        selectSizes.style.visibility = "hidden";
        shoeList.style.visibility = "hidden";
        
    });

 $('#viewStock').on('click', function(e){
        
        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSizes');
        var shoeList = document.getElementById('shoeList');
        
        addStockDisplay.style.visibility = "hidden";
        selectBrandName.style.visibility = "visible";
        selectSizes.style.visibility = "visible";
        shoeList.style.visibility = "visible";
        
    });



add_new_shoe();

view_all_shoes();

find_brand();

find_size();

//find_brand_size();




