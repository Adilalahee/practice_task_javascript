let num =5;
if(num>6){
    console.log('You cant go')
}
console.log('go on');

let num=2;
let sum=0;
while (num<=10){
    console.log(num);
    // sum=sum+num;
    // console.log('Hello',sum)
    // num=num+1;
    // num++;
    if(num%2===0){
        console.log('even',num)
    }
    num+=1;
}

for(let num=0; num<5; num++){
    console.log(num)
}
let sum=0;
for(i=11;i<=30;i++){
    sum=sum+i;
    // console.log(sum)
}
console.log(sum)
for(i=11;i>0;i--){
    console.log(i)
}
for (let i=1;i<20;i++){
    console.log(i);
    if(i>5){
        break
    }
}