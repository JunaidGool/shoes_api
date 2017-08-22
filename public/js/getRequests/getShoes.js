// get all shoes /api/shoes
function getAllShoes(){

// get all shoes
  $.ajax({
    type: 'GET',
    url: 'https://codex-shoes-api.herokuapp.com/api/shoes',
    success: function(shoes) {

      var shoesData = shoes.stock;

      var displayStock = viewStock(shoesData);

      var addNewStock = add_new_shoe(shoesData);

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
    url: 'https://codex-shoes-api.herokuapp.com/api/shoes/brands/' + selectedBrand,
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
      url: 'https://codex-shoes-api.herokuapp.com/api/shoes',
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
      url: 'https://codex-shoes-api.herokuapp.com/api/shoes/sizes/' + selectedSize,
      success: function(shoes){

        var shoesData = shoes.stock;

        allShoes.innerHTML = allShoesTemplateInstance({stock: shoesData});
      }
    });
  }
};
