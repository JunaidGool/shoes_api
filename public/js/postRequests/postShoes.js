
function add_new_shoe(){

    $('#add-shoe').on('click', function(){

      console.log(document.getElementById("file").files[0].name);

      var path = document.getElementById("file").files[0].name

    var shoe = { stock:{
      img:  path,
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
      success: function(shoes){

        alert("You have succesfully added new stock");

      }
    });
  });

};


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

        getAllShoes();
        objectIDsale = "null" ;
        in_stockSale = "null" ;
        qtySold = "";

      }

    });
  }
