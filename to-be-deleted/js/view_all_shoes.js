function view_all_shoes(){
    
      $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes',
    success: function(shoes){
      $.each(shoes, function(i, shoes){
                   
          allShoes.innerHTML = allShoesTemplateInstance({stock: shoes }); 
          brandList.innerHTML = brandListTemplateInstance({stock: shoes});
          
          
      });
    },
    error: function(){
      alert:('Error Finding Shoes')
    }
  });
};

function brands_sizes(){
    
      $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes/brands/nike/sizes/12',
    success: function(shoes){
      $.each(shoes, function(i, shoes){
          
          console.log(shoes)
                   
     
          brandSize.innerHTML = brandSizeTemplateInstance({stock:shoes});
      });
    },
    error: function(){
      alert:('Error Finding Shoes')
    }
  });
};
