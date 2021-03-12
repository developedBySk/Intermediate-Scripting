function rot13(str) {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
    const beta =  ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    str.toUpperCase();

    var decoded = str.split("");
    for(let index = 0;index<=str.length;index++){
        for(let i = 0; i<=13; i++){
            if(str[index]===alpha[i]){
                decoded[index]=beta[i]
            }
            else if(str[index]===beta[i]){
                decoded[index]=alpha[i]
            }
        }
    }
    return decoded.join("");
    
}
  
console.log(rot13("SERR PBQR PNZC"));