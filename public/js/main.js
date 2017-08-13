var allShoes = document.querySelector('.allShoes');
var allBrands = document.querySelector('.allBrands');
var allSizes = document.querySelector('.allSizes');

var allShoesTemplate = document.querySelector('.allShoesTemplate');
var allShoesTemplateInstance = Handlebars.compile(allShoesTemplate.innerHTML);

var allBrandsTemplate = document.querySelector('.allBrandsTemplate');
var allBrandsTemplateInstance = Handlebars.compile(allBrandsTemplate.innerHTML)

var allSizesTemplate = document.querySelector('.allSizesTemplate');
var allSizesTemplateInstance = Handlebars.compile(allSizesTemplate.innerHTML);

var brand = document.getElementById('brand');
var color = document.getElementById('color');
var size = document.getElementById('size');
var price = document.getElementById('price');
var in_stock = document.getElementById('in_stock');

add_new_shoe();

view_all_shoes();

find_brand();

find_size();
