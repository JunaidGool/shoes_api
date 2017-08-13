function view_all_shoes(){
    
      $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes',
    success: function(shoes){
      $.each(shoes, function(i, shoes){
        allShoes.innerHTML = allShoesTemplateInstance({stock: shoes });
        allBrands.innerHTML = allBrandsTemplateInstance({brandname: shoes });
        allSizes.innerHTML = allSizesTemplateInstance({size: shoes})
      });
    },
    error: function(){
      alert:('Error Finding Shoes')
    }
  })
    

};
