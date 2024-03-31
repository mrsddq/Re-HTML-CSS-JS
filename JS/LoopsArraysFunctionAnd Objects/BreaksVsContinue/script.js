const input=[3256,23,34,56,36,7935,13,75,12,34,45,56,76,78,89,90];

const evenNumbers=[];

for(let i of input){
    if(i%2!==0){
        continue;
    }
    // console.log(i);
    evenNumbers.push(i);
    if(evenNumbers.length===5){
        break;
    }
    console.log(evenNumbers);
}
console.log(evenNumbers);