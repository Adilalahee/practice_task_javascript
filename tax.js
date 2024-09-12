/*function taxcalculator(Income,Expense){
    const totalIncome=Income;
    const totalExpense=Expense;
    const Total=totalIncome-totalExpense;
    const tax=Total*.20;
    if(Total>=0 && totalIncome>0 && totalExpense>0){
        return tax;
    }
    else{
        return "Invalid Value";
    }
}
const cost=taxcalculator(2000,2000);
console.log(cost);

function emails(email){
    let eml=email;
    const ems=email.split('@');
    let word1=ems[0]
    let word2=ems[1]
    for (const emg of eml){
        if(emg.includes('@')!=false){
            const words=word1+' sent you a mail from '+word2;
            return words;
        }
       
    }
   
     return 'Invalid'
   

}
const em=emails('adilmdctgmail.com');
console.log(em);


function checkdigits(name){
    let nam=Number.parseInt(name);
  for(let i=0; i<=name.length; i++){
    if(name.includes(i)===true){
        return true;
    }
  }

return false;
}

const output=checkdigits('5435a34dil');
console.log(output)

*/
function getObject(man){
    if(man.isfamily===true){
        const sum=20;
        const result=man.testScore+man.midScore+sum;
        return result
    }
    else{return false}   
}
const man={
    testScore:50,
    midScore:20,
    isfamily:false
};
const results=getObject(man)
console.log(results)
/*
waiting time
function waitingTime(waitingTimes,serialNumber){
    let sum = 0;

    const l=waitingTimes.length;
    for (let i = 0; i <waitingTimes.length; i++) {
      sum += waitingTimes[i];
    }
    const avg=Math.round(sum/l);
    const pendingPeople=serialNumber-l;
    const pendingTiime=avg*pendingPeople;
    return pendingTiime;
}
const trainees=waitingTime([4,4,4,4,4,9],9);
console.log(trainees) */