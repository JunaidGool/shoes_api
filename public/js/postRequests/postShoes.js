function addNewShoe(cb, errcb){

    $('#add-shoe').on('click', function(){

      var path = document.getElementById("file").files[0].name

      var shoe = { stock:{
        img:  path,
        brand: brandname.value,
        color: color.value,
        size: shoeSize.value,
        price: price.value,
        in_stock: quantity.value
        }
      };

      $.ajax({
      contentType: 'application/x-www-form-urlencoded',
      type: 'POST',
      url: 'http://localhost:9001/api/shoes',
      data: shoe,
      success: function(shoes){

        alert("You have succesfully added new stock");

        location.reload();

      }
    });
  });
};


// get all shoes /api/shoes
// function getAllShoes(cb, errCb){
//
//   $.ajax({
//     type: 'GET',
//     url: 'http://localhost:9001/api/shoes',
//     success: cb,
//     error: errCb
//   });
// };

var purchaseButton = document.getElementById('purchaseButton');
purchaseButton.addEventListener('click', sale);

function sale(){
  //sell stock form
  var objectIDsale = document.getElementById('object_idSale').value;
  var in_stockSale = document.getElementById('in_stockSale').value;
  var qtySold = document.getElementById('qtySold').value;

    $.ajax({

      contentType: 'application/x-www-form-urlencoded',
      type: 'POST',
      url: 'http://localhost:9001/api/shoes/sold/' + objectIDsale + '/' + in_stockSale + '/' + qtySold,
      data: objectIDsale, in_stockSale, qtySold,
      success: function(shoes){
        alert('you sold shoes');

        selectBrandName.style.display = "block";
        selectSize.style.display = "block";
        shoeList.style.display = "block";
        purchaseForm.style.display = "block";



      }

    });

    location.reload();


  }
