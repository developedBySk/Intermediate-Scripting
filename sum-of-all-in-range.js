function sum(arr){
    return arr.reduce((sum,number) => sum + number,0);
}

console.log(sum([4,5,34,32]));