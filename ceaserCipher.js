function rot13(str) {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
    const beta =  ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const code=str.toUpperCase();

    var decoded = code.split("");

    for(let index = 0;index<=code.length;index++){
        for(let i = 0; i<=13; i++){
            if(code[index]===alpha[i]){
                decoded[index]=beta[i]
            }
            else if(code[index]===beta[i]){
                decoded[index]=alpha[i]
            }
        }
    }
    return decoded.join("");
}
  
console.log(rot13("free code camp"));