// get all shoes /api/shoes
function getAllShoes(cb, errCb){

  $.ajax({
    type: 'GET',
    url: 'http://localhost:9001/api/shoes',
    success: cb,
    error: errCb
  });
};
