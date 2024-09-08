// If a year is a leap year or Not

function isleapyear(year){
    if(year%4===0){
        return true
    }
    else {
        return false
    }
}
const leapYear=isleapyear(2050);
console.log(leapYear);

function isleapyear2(year){
    if(year%400===0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%4===0){
        return true
    }
    else{
        return false
    }
}
const leapYear3=isleapyear2(1900);
const leapYear4=isleapyear2(1950);
const leapYear5=isleapyear2(2000);
const leapYear6=isleapyear2(2050);
const leapYear7=isleapyear2(2100);
 console.log(leapYear3,leapYear4,leapYear5,leapYear6,leapYear7);