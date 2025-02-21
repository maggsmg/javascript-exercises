const palindromes = function (original) {
    let lower = original.toLowerCase()
    let noSpaces = lower.replaceAll(" ", "");
    let noCommas = noSpaces.replaceAll(",", "");
    let noPoints = noCommas.replaceAll(".", "");
    let noExclamations = noPoints.replaceAll("!", "");
    let cleanString = noExclamations;

    /*const myArray = straight.split(" ");*/
    let reverse = '';
    for (let i = cleanString.length-1; i >=0; i--) {
        reverse += cleanString.charAt(i)
      }
    
    if (cleanString == reverse){
        return true
    }
    else{
        return false
    }


};

// Do not edit below this line
module.exports = palindromes;
