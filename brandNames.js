module.exports = function(shoesData){

    var brandNames = [];

    
    function allBrands(){
        for (i=0;i<shoesData.length;i++){
            var brandlist = shoesData[i].brandName;
            var addidasBrand = brandlist.startsWith("addidas");
            var nikeBrand = brandlist.startsWith("nike");
            var pumaBrand = brandlist.startsWith("puma");
            brandNames.push(brandlist)
        };
    };
    
    allBrands();
    return brandNames;
}

    