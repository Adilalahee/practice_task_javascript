// //finding out who will get the maximum marks
// function getMax(num_1,num_2){
//     if (num_1>num_2){
//         return num_1
//     }
//     else{
//         return num_2
//     }
// }
// const max=getMax(87,88);
// console.log(max);

// // for three people

// function getmx(num1,num2,num3){
//     if (num1>num2 && num1>num3){
//         return num1
//     }
//     else if (num2>num1 && num2>num3){
//         return num2
//     }
//     else{
//         return num3
//     }
// }
// const mx=getmx(87,88,89);
// console.log(mx);

//maximum heights in an Array
//  const heights=[34,35,6.6,45,76,89,24,100];
//  function getM(numbers){
//     let maxx=numbers[0];
//     for(const num of numbers){
//         if(num>maxx){
//             maxx=num;
//         }
//     }
//     return maxx;
//  }
//  const high=getM(heights);
//  console.log(high)

//  //wood costing 
//  function woods(chairqty,tableqty,bedqty){
//     const perchairw=5;
//     const pertablew=9;
//     const perbedw=32;
//     const totalchair=chairqty*perchairw;
//     const totaltable=tableqty*pertablew;
//     const totalbed=bedqty*perbedw;
//     const totalwood=totalbed+totalchair+totaltable;
//     return totalwood;

//  }
//  const woodqty=woods(3,5,2);
//  console.log(woodqty)

//  //who is the oldest man

//  const cv=[
//     {name:'adil mohammad',age:34},
//     {name:'adil mohammad',age:35},
//     {name:'adil mohammad',age:30},
//     {name:'adil mohammad',age:37},
//  ]
//  function getage(cv){
//     let min=cv[0];
//     for(const cvs of cv){
//         if (cvs.age>min.age)
//             min=cvs;
//         }
//         return min
//     }
    
 
//  const oldest=getage(cv);
//  console.log(oldest)

 //shopping cart

//  const card=[
//     {name:'shirt',color:'shirt',price:300,quantity:3},
//     {name:'shirt',color:'shirt',price:30,quantity:3},
//     {name:'shirt',color:'shirt',price:500,quantity:4},
//     {name:'shirt',color:'shirt',price:400,quantity:2},
//     {name:'shirt',color:'shirt',price:200,quantity:3}
//  ]

//  function totalcart(numbers){
//     let total=0;
//     for(const carts of numbers){
//         const productcost=carts.price*carts.quantity;
//         total=total+productcost;

//     }
//     return total
//  }
//  const cart=totalcart(card);
//  console.log(cart)

// function discountedprice(qty){
//     if (qty<=50){
//         const total=qty*100;
//         return total
//     }
//     else if(qty>=200){
//         const total=qty*200;
//         return total
//     }
//     else{
//         const total=qty*50;
//         return total
//     }
// }
// const totals=discountedprice(100);
// console.log(totals)

function add(num01,num02){
    return num01+num02;
}
function subs(num01,num02){
    return num01-num02;
}
function div(num01,num02){
    return num01%num02;
}
function multi(num01,num02){
    return num01*num02;
}
function calculator(a,b, operation){
    if(operation==='add'){
        const result=add(a,b);
        return result
    }
    else if(operation==='subs'){
        const result=add(a,b);
        return result
    }
    else if(operation==='div'){
        const result=add(a,b);
        return result
    }
    else if(operation==='multi'){
        const result=add(a,b);
        return result
    }
}
const value=calculator(6,2,'subs');
console.log(value)
