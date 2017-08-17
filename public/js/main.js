var allShoes = document.querySelector('.allShoes');
var allBrands = document.querySelector('.allBrands');
var allSizes = document.querySelector('.allSizes');
var brandList = document.querySelector('.brandList');
var brand_size = document.querySelector('.brand_size');

var allShoesTemplate = document.querySelector('.allShoesTemplate');
var allShoesTemplateInstance = Handlebars.compile(allShoesTemplate.innerHTML);

var allBrandsTemplate = document.querySelector('.allBrandsTemplate');
var allBrandsTemplateInstance = Handlebars.compile(allBrandsTemplate.innerHTML)

var allSizesTemplate = document.querySelector('.allSizesTemplate');
var allSizesTemplateInstance = Handlebars.compile(allSizesTemplate.innerHTML);

var brandListTemplate = document.querySelector('.brandListTemplate');
var brandListTemplateInstance = Handlebars.compile(brandListTemplate.innerHTML);

var brand_sizeTemplate = document.querySelector('.brand_sizeTemplate');
var brand_sizeTemplateInstance = Handlebars.compile(brand_sizeTemplate.innerHTML);

var uniqueBrands = [];
var uniqueSizes = [];

var brandMap = {};
var sizeMap = {};

var brands_sizes_array = [];
var sizes_for_brand_array = [];


var brand = document.getElementById('brand');
var color = document.getElementById('color');
var size = document.getElementById('size');
var price = document.getElementById('price');
var in_stock = document.getElementById('in_stock');

display_stock();

display_add_stock();

display_brands();

add_new_shoe();

view_all_shoes();

find_size();

find_brand();















