function telephoneCheck(str){
    var number = str.split(/\D/).join("")
    if(number.length>10){
        if(number[0]===1){
            return true
        }
        else{
            return false
        }
    }

    if(number.length===10){
        return true
    }
    
}
console.log(telephoneCheck("(555)555-5555"))