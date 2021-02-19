function uniteUnique(arr) {
    var newArray=[];
    var args = Array.prototype.slice.call(arguments)
    for(var i=0;i<args.length;i++){
        args[i].map(item => newArray.push(item))
    }
    return newArray;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));