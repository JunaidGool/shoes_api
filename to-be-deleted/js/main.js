var allShoes = document.querySelector('.allShoes');
var brandList = document.querySelector('.brandList');
var brandSize = document.querySelector('.brandSize');

var allShoesTemplate = document.querySelector('.allShoesTemplate');
var allShoesTemplateInstance = Handlebars.compile(allShoesTemplate.innerHTML);

var brandListTemplate = document.querySelector('.brandListTemplate');
var brandListTemplateInstance = Handlebars.compile(brandListTemplate.innerHTML);

var brandSizeTemplate = document.querySelector('.brandSizeTemplate');
var brandSizeTemplateInstance = Handlebars.compile(brandSizeTemplate.innerHTML);





view_all_shoes();
brands_sizes();