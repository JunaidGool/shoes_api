function selectBrand() {

  $('#selectBrandName').on('click', function(e) {

    var selectedBrand = e.target.value;

    var brand = getBrand(selectedBrand);

  });
};


function selectSize() {

  $('#selectSize').on('click', function(e) {

    var selectedSize = e.target.value;

    var size = getSize(selectedSize);

  });
};

function selectBrandAndSize(){

  $('#selectBrandName').on('click', function(e){

    var selectedBrand = e.target.value;

    $('#selectSize').on('click', function(f){

      var selectedSize = f.target.value;

      $.ajax({
        type: 'GET',
        url: 'https://codex-shoes-api.herokuapp.com/api/shoes/brands/' + selectedBrand + '/sizes/' + selectedSize,
        success: function(shoes){

          var shoesData = shoes.stock;

          allShoes.innerHTML = allShoesTemplateInstance({stock: shoesData});
          saleForm.innerHTML = saleFormTemplateInstance({shoeID: shoesData});
        }
      });
    });
  });
};

function selectPurchase(){

  $('#shoeList').on('click', function(e){
    console.log(e.target.parentElement.innerText);


  });
};
