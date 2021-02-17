/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end
*/

function alter(word){
    const regex = /^[^aeiou]+/;
    let consonant = word.match(regex);
    return consonant !== null
            ?   word .replace(regex,"")
                     .concat(consonant)
                     .concat("ay")
            :   word .concat("way");
}
console.log(alter("consonant"));