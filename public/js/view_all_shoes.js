var uniqueBrands = [];
var uniqueSizes = [];

var brandMap = {};
var sizeMap = {};

function view_all_shoes(){
    
      $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes',
    success: function(shoes){
      $.each(shoes, function(i, shoes){
          
          var filterBrandData = filterBrands(shoes);
          var filterSizeData = filterSizes(shoes);
          
          allShoes.innerHTML = allShoesTemplateInstance({stock: shoes });
          allBrands.innerHTML = allBrandsTemplateInstance({brandname: uniqueBrands });
          allSizes.innerHTML = allSizesTemplateInstance({size: uniqueSizes})
      });
    },
    error: function(){
      alert:('Error Finding Shoes')
    }
  });
};
