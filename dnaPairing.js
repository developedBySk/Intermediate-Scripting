/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElements(str){
    var newArray = [];
    var search = function(item){
        switch (item) {
            case "A":
                newArray.push(["A","T"]);
                break;
            case "T":
                newArray.push(["T","A"]);
                break;
            case "G":
                newArray.push(["G","C"]);
                break;
            case "C":
                newArray.push(["C","G"]);
                break;
            default:
                break;
        }
    }
    for(var i=0 ; i<str.length;i++){
        search(str[i])
    }
    return newArray;
}
console.log(pairElements("GCG"));