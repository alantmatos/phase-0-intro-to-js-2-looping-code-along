// Code your solutions in this file

// test1
const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise';


const writeCards = function (array,event='surprise') {
    let newArray = [];
    
    for ( let i=0;i<array.length;i++)
 newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
   return newArray
}



//test 2 and 3
const countDown = function (number) {
    for ( let i=number;i>=0;i--)
console.log(i)

}