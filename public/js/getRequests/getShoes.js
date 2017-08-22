// get all shoes /api/shoes
function getAllShoes(){


  $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes',
    success: function(shoes) {

      var shoesData = shoes.stock;

      var filterBrandData = filterBrands(shoesData);


      var filterSizeData = filterSizes(shoesData);


      allShoes.innerHTML = allShoesTemplateInstance({
        stock: shoesData
      });

    

      allBrands.innerHTML = allBrandsTemplateInstance({
        brandname: uniqueBrands
      });

      allSizes.innerHTML = allSizesTemplateInstance({
        size: uniqueSizes
      });

    },
    error: function() {
      alert: ('Error Finding Shoes')
    }
  });
};


function getBrand(selectedBrand){

  $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes/brands/' + selectedBrand,
    success: function(shoes){

      var shoesData = shoes.stock;

      if(selectedBrand != "all"){

        allShoes.innerHTML = allShoesTemplateInstance({stock: shoesData});

      } else {

        getAllShoes()

      }

    }
  });
};


function getSize(selectedSize){

  if(selectedSize === "all"){
    $.ajax({
      type: 'GET',
      url: 'http://localhost:9001/api/shoes',
      success: function(shoes){

        var shoesData = shoes.stock;

        if(selectedSize != "all"){

          allShoes.innerHTML = allShoesTemplateInstance({
            stock: shoesData
          });

        } else {

            getAllShoes()

        }

      }
    });

  } else {

    $.ajax({
      type: 'GET',
      url: 'http://localhost:9001/api/shoes/sizes/' + selectedSize,
      success: function(shoes){

        var shoesData = shoes.stock;

        allShoes.innerHTML = allShoesTemplateInstance({stock: shoesData});
      }
    });
  }
};

// function getBrandSize(selectedBrand, selectedSize){
//
//
//
//
// };
