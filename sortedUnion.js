function uniteUnique(arr) {
    var newArray=[];
    var finalArray=[];
    var args = Array.prototype.slice.call(arguments)
    for(let i=0;i<args.length;i++){
        args[i].map(item => newArray.push(item))
    }
    for(let j =0;j<newArray.length;j++){
        for(let k=0;k<newArray.length;k++){
            var indexValue = newArray[k];
            if(finalArray.indexOf(indexValue)==-1){
                finalArray.push(indexValue);
            }
        }
    }
    return finalArray;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));