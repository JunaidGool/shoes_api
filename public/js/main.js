// function getTemplate(cssSeletor){
//   var templateElem = document.querySelector(cssSeletor);
//   var templateInstance = Handlebars.compile(templateElem.innerHTML);
//   return templateInstance;
// }
//
// var allShoesTemplateInstance = getTemplate('.allShoesTemplate');

var allShoes = document.querySelector('.allShoes');
var allBrands = document.querySelector('.allBrands');
var allSizes = document.querySelector('.allSizes');
var saleForm = document.querySelector('.saleForm');

var allShoesTemplate = document.querySelector('.allShoesTemplate');
var allShoesTemplateInstance = Handlebars.compile(allShoesTemplate.innerHTML);

var allBrandsTemplate = document.querySelector('.allBrandsTemplate');
var allBrandsTemplateInstance = Handlebars.compile(allBrandsTemplate.innerHTML);

var allSizesTemplate = document.querySelector('.allSizesTemplate');
var allSizesTemplateInstance = Handlebars.compile(allSizesTemplate.innerHTML);

var saleFormTemplate = document.querySelector('.saleFormTemplate');
var saleFormTemplateInstance = Handlebars.compile(saleFormTemplate.innerHTML);

var addShoeButton = document.getElementById('addShoe');

display_add_stock();
viewStock();

addNewShoe();

getAllShoes(function(shoes) {

  var shoesData = shoes.stock;

  var filterBrandData = filterBrands(shoesData);

  var filterSizeData = filterSizes(shoesData);

  // var sale = purchaseShoe(shoesData);

  allShoes.innerHTML = allShoesTemplateInstance({
    stock: shoesData
  });

  allBrands.innerHTML = allBrandsTemplateInstance({
    brandname: uniqueBrands
  });

  allSizes.innerHTML = allSizesTemplateInstance({
    size: uniqueSizes
  });

  //*************************
  var purchase = document.getElementById('shoeList');
  var purchaseClick = purchase.addEventListener('click', function(e){

    var shoeID = e.target.value;
    var locateID = filterPurchase(shoesData, shoeID);

    selectBrandName.style.display = "none";
    selectSize.style.display = "none";
    shoeList.style.display = "none";
    saleForm.style.display = "block";

  });

}, function(err){
    alert(err);
});
