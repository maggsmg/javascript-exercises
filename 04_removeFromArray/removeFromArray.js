const removeFromArray = function() {
    let array = arguments[0];
    let toRemove = []
    let j = 0
    for (let i = 1; i < arguments.length; i++) {
        toRemove[j] = arguments[i]
        j++
      }
    
    let resultArray = array.filter(arrayRemoval)

    function arrayRemoval(currentValue){
        return !toRemove.includes(currentValue)
    }

    return resultArray
};

// Do not edit below this line
module.exports = removeFromArray;
