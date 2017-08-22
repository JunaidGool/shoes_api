function display_add_stock(){
    $('#addStockDisplay').on('click', function(e){


      console.log("clicked");

        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSize');
        var shoeList = document.getElementById('shoeList');
        var purchase = document.getElementById('purchase');

        addStockDisplay.style.display = "block";
        selectBrandName.style.display = "none";
        selectSizes.style.display = "none";
        shoeList.style.display = "none";
        purchase.style.display = "none";

    });
};


function viewStock(shoesData){
    $('#viewStock').on('click', function(e){

      allShoes.innerHTML = allShoesTemplateInstance({
        stock: shoesData
      });


      console.log("clicked");

        var addStockDisplay = document.getElementById('addStockForm');
        var selectBrandName = document.getElementById('selectBrandName');
        var selectSizes = document.getElementById('selectSize');
        var shoeList = document.getElementById('shoeList');
        var purchase = document.getElementById('purchase');

        addStockDisplay.style.display = "none";
        selectBrandName.style.display = "block";
        selectSizes.style.display = "block";
        shoeList.style.display = "block";
        purchase.style.display = "block";

    });
};
