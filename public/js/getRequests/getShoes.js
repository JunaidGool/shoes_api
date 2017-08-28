// get all shoes /api/shoes
function getAllShoes(cb, errCb){

  $.ajax({
    type: 'GET',
    url: 'https://codex-shoes-api.herokuapp.com/api/shoes',
    success: cb,
    error: errCb
  });
};
