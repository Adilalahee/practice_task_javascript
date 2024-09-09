// Remove duplicates

function zeroDuplicates(number){
    let zero=[];
    for (const unique of number){
        if(zero.includes(unique)===false){
            zero.push(unique);
        }
    }
    return zero;
}
const number=[2,5,34,2,5,6,7,3,5,0,4,33];
const numbers=zeroDuplicates(zero);
console.log(numbers);