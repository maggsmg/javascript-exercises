const fibonacci = function(element) {
    let numberElement = Number(element)

    if(numberElement < 0){
        return "OOPS"
    }
    else if (numberElement == 0){
        return 0
    }
    else if(numberElement < 2){
        return 1
    }
    else{
        let array = []
        array[0] = 1
        array[1] = 1
    
        for (let i = 2; i < numberElement; i++){
            let previous = i -1
            let secPrevious = i -2
            array[i] = array[previous] + array[secPrevious]
        }
        return array[numberElement - 1]
    }

};

// Do not edit below this line
module.exports = fibonacci;
