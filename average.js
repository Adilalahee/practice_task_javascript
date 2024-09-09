// average of all numbers
function average(numbers){
    const odds=[];
    for(const num of numbers){
        if (num%2===1){
            odds.push(num);
        }
       
    }
    console.log(odds);
    let sum=0;
    for(const nums of odds){
        sum=sum+nums;
    }
    const count=odds.length;
    console.log(sum/count,count);
}
const numbers=[2,3,4,66,1,3];
const avg=average(numbers);
// console.log(avg)