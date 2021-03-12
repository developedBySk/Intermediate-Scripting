function telephoneCheck(str){
   
    var number = str.split(/\D/).join("")
    if(number.length>10){
        if(number[0]==="1"){
            return true
        }
        else{
            return false
        }
    }

    else if(number.length===10){
        return true
    }
    else{
        return false
    }
}
console.log(telephoneCheck("123**&!!asdf#"))