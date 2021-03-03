/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommon(arr){
    const [min,max] = arr.sort((a,b)=> a -b )
    const divisors = max-min+1
    let upperLimit=1
    for(let i = min;i<=max;i++){
        upperLimit *= i;
    }
    //to test multiples
    for(let j=max;j<=upperLimit;j++){
        let countDivisors=0
        for(let k=min;k<=max;k++){
            if(j%k===0){
                countDivisors +=1
            }
        }
        if(countDivisors===divisors){
            return j;
        }
    }
}
console.log(smallestCommon([23,18]))