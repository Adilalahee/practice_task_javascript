const friend='Syed Adil Mohammad,Syed Akil Mohammad,Syeda Anika Noor,Amwna Begum';
// const friends=friend.split(',');
// //  console.log(friends)
//  console.log(friends.join('/'));
//  console.log(friend.includes('a'))
// console.log(friend.split(' ').reverse());
 
const objectz ={
    name:'adil',
    age:53,
    school:'gmhs'

}
console.log(objectz.name)
console.log(objectz['age'])
let obj=objectz['school'];
console.log(obj)

const objj=Object.values(objectz)
console.log(objj)
delete objectz.age;
console.log(objj)

for (const pro in objectz){
    console.log(pro)
    console.log(objectz[pro])
}