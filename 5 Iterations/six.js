
const MyNums = [1,2,3,4,5,6,7,8]
// const NewNums = MyNums.map((num) => num + 10)
// console.log(NewNums);

// let NewNums = [] 
//  MyNums.forEach((num)=>{
//      NewNums.push(num+10)
// })
// console.log(NewNums);


let NewNums = MyNums.
                    map((num)=>num*10).             //Chaining
                    map((num)=>num+1).
                    filter((num)=>num>31)
                
console.log(NewNums);
