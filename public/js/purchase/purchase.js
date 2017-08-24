function filterPurchase(shoes, shoeId){

  var purchaseArray = [];

  for(i = 0; i < shoes.length; i++){

    var id = shoes[i]._id;
    var stockAmount = shoes[i].in_stock;

    if(id === shoeId){

      purchaseArray.push({_id: id,
                          in_stock: stockAmount});

      saleForm.innerHTML = saleFormTemplateInstance({shoeID: purchaseArray});

    }

  };

};
