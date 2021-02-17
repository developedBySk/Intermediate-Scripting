/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function missingLetters(str){
    
    for(var i = 0;i<str.length;i++){
        const n = str.charCodeAt(i);
        if(n !== str.charCodeAt(0)+i){
            return String.fromCharCode(n-1);
        }
    }
}
console.log(missingLetters("abce"));