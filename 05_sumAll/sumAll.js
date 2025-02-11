const sumAll = function(numOne,numTwo) {
    let total = 0
    let typeOne = typeof numOne
    let typeTwo = typeof numTwo

/*            if(typeOne != 'number' || typeTwo != 'number'){
            return 'ERROR'
        }else if(numOne <0 || numTwo <0){
            return 'ERROR'
        }else if(Number.isInteger(numOne) == false || Number.isInteger(numTwo) == false){
            return 'ERROR'
        }else{
            let high = Math.max(numOne,numTwo)
            let low = Math.min (numOne,numTwo)
            for(let i = low; i<=high; i++){
                total+=i
            }
            return total 
        }*/
        if(numOne <0 || numTwo <0){
            return 'ERROR'
        }
        
        if(Number.isInteger(numOne) && Number.isInteger(numTwo)){
            let high = Math.max(numOne,numTwo)
            let low = Math.min (numOne,numTwo)
            for(let i = low; i<=high; i++){
                total+=i
            }
            return total 
        }
            return 'ERROR'
        
}
;

// Do not edit below this line
module.exports = sumAll;
