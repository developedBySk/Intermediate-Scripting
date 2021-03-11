var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      for(let a in firstAndLast){
        if(a!==''){
            nameLen.push(a)
        }
        console.log(nameLen.length)
      }
      
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();