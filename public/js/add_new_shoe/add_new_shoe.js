function add_new_shoe(){
    
    $('#add-shoe').on('click', function(){
      
    var shoe = { stock:{
      brand: brand.value,
      color: color.value,
      size: size.value,
      price: price.value,
      in_stock: in_stock.value
      }
    };
      
      $.ajax({
      contentType: 'application/x-www-form-urlencoded',
      type: 'POST',
      url: 'http://localhost:9001/api/shoes',
      data: shoe,
      success: add_new_shoe
    });
        
         alert("You have succesfully added new stock");
    
    brand.value = "";
    color.value = "";
    size.value = "";
    price.value = "";
    in_stock.value = "";
      
    
  });
    
   

};