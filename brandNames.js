module.exports = function(shoesData){

    var brandNames = [];
    
    
    function allBrands(){
        for (i=0;i<shoesData.length;i++){
            var brandlist = shoesData[i].brandName;
            brandNames.push(brandlist);
        };
        
        return brandlist;
    };
    allBrands();
    return brandNames;
   
}

    