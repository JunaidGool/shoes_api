
var uniqueBrands = [];
var uniqueSizes = [];

var brandMap = {};
var sizeMap = {};

function filterBrands(shoesData){

    for(i = 0; i < shoesData.length; i++){

        var brandList = shoesData[i].brand;

        var foundBrand = false;

        if(brandMap[brandList] === undefined){

            brandMap [brandList] = brandList;



            uniqueBrands.push({brand: brandList});

            // uniqueBrands.filter();



        };
    };
};

function filterSizes(shoesData){

    for(n = 0; n < shoesData.length; n++){

        var sizeList = shoesData[n].size;

        var foundSize = false;

        if(sizeMap[sizeList] === undefined){

            sizeMap[sizeList] = sizeList;


            uniqueSizes.push({size: sizeList});

        };
    };
};
