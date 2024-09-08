// Inch to feet conversion
function H_height(inch){
    const feet=inch/12;
    return feet;
}
const myHeight=H_height(50);
console.log(myHeight);

// Example
function F_height(inch){
    const myHeight=inch/12;
    const feetHeight=parseInt(myHeight);
    const myHeight2=parseInt(inch%myHeight);
    const result=feetHeight+'ft'+myHeight2+'inch';
    return result;
}
const myheight3=F_height(80);
console.log(myheight3);

// miles to kilometre

function m_to_km(miles){
    const kilometre=miles*1.67;
    return kilometre;
}
const mile=m_to_km(5);
console.log(mile+' '+'km');

// kilogram to gram
 function kgToGram(kg){
    const grams=parseInt(kg*1000);
    return grams;
 }
const gram= kgToGram(5);
 console.log(gram);