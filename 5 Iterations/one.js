// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop element is ${i}`)
//     for (let j = 1; j <= 10; j++) {
        
//         console.log(i + "*" + j + " = " + i*j);
        
//     }
// }

//0000000000000000000000000000000000000000000000000000000000

// let myArray = ["Saurav","Varad","Bhushan","Swapnil"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//Break & Cont

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element==5){
        continue                            //break = stops the execution of loop
    }                                      //continue = skips the value of element
    console.log(element);
}

