function filterSizes(shoes){
    for(n = 0; n < shoes.length; n++){
        var sizeList = shoes[n].size;
        var foundSize = false;
        if(sizeMap[sizeList] === undefined){
            sizeMap[sizeList] = sizeList;
            uniqueSizes.push(sizeList);
        };
    };
};