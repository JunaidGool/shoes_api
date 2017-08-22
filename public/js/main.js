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

var purchaseButton = document.getElementById('purchase');

var addShoeButton = document.getElementById('addShoe');





display_add_stock();
viewStock();

add_new_shoe();
purchaseButton.addEventListener('click', sale);
getAllShoes();
selectBrandAndSize();
selectBrand();
selectSize();
selectPurchase();
