const reverseString = function(original) {
    let straight = original
    /*const myArray = straight.split(" ");*/
    let reverse = '';
    for (let i = straight.length-1; i >=0; i--) {
        reverse += straight.charAt(i)
      }
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
