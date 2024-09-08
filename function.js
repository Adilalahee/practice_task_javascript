function square(x){
    console.log(x);
    const num=x*x;
    console.log(num);
}
square(4)
square(9)

function add(x,y,z){
    const nam=x+y+z;
    console.log(nam);
}
add(2,3,5)

function multiply(a,b,c,d){
    const result=a*b*c*d;
    return result;
}
const multi=multiply(3,3,5,6);
console.log(multi)
function isEven(number){
    if(number%2==1){
        return true;
    }
    else{
        return false;
    }
}
const output=isEven(5);
console.log(output);

function sumOf(numbers){
    let sum=0;
   for(const num of numbers){
    console.log(num)
    sum=sum+num
   }
   return sum;
}
const numbers=[1,23,4,4,1,5]
const nam=sumOf(numbers);
console.log('Total', nam);

function menu(){
    console.log('adil');
}