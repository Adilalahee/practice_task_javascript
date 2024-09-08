const number=[1,2,3,4,5,6,7,8,9,0];
console.log(number)
number.reverse()
console.log(number)
const numbers=[];
for (const num of number){
    // console.log(num)
    numbers.unshift(num)
}

for(let i=0;i<number.length;i++){
    const num=number[i];
    // console.log(num)
    numbers.unshift(num)
}
const vvvv=['b','d','e','s','h','p'];
const nam=vvvv.sort();
console.log(nam)