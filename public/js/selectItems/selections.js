var brand = document.getElementById('selectBrandName');
var selectedBrand = "";


var brandClick = brand.addEventListener('change', function(e){
  selectedBrand = e.target.value;

  brandsize()
});

var size = document.getElementById('selectSize');
var selectedSize = 0;


var sizeClick = size.addEventListener('change', function(e){
  selectedSize = e.target.value;

  brandsize()
});

function brandsize(){

  getBrandAndSize(selectedBrand,selectedSize);

}

function getBrandAndSize(selectedBrand, selectedSize, shoesData){

  // if(selectedBrand == "all" && selectedSize == "all"){
  //
  //     $.ajax({
  //       type: 'GET',
  //       url: 'http://localhost:9001/api/shoes',
  //       success: function(shoes){
  //
  //         var shoesData = shoes.stock;
  //
  //         allShoes.innerHTML = allShoesTemplateInstance({
  //           stock: shoesData
  //         });
  //       }
  //     });
  //
  // }

  if(selectedBrand !== "all" && selectedSize === 0){

    $.ajax({
      type: 'GET',
      url: 'http://localhost:9001/api/shoes/brands/' + selectedBrand,
      success: function(shoes){

        var brands = shoes.stock;

        allShoes.innerHTML = allShoesTemplateInstance({stock: brands});
      }
    });

  } else if (selectedSize !== "all" && selectedBrand === ""){

    $.ajax({
      type: 'GET',
      url: 'http://localhost:9001/api/shoes/sizes/' + selectedSize,
      success: function(shoes){

        var size = shoes.stock;

        allShoes.innerHTML = allShoesTemplateInstance({stock: size});
      }
    });

  } else if (selectedBrand !== undefined && selectedSize !== undefined && selectedBrand !== "" && selectedSize !== 0){

    $.ajax({
      type: 'GET',
      url: 'http://localhost:9001/api/shoes/brands/' + selectedBrand + '/sizes/' + selectedSize,
      success: function(shoes){

        var shoesData = shoes.stock;

        allShoes.innerHTML = allShoesTemplateInstance({stock: shoesData});
        saleForm.innerHTML = saleFormTemplateInstance({shoeID: shoesData});
      }

    });

  }

};
