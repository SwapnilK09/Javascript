
let myArray = [1,2,3,4]
let Inval = 0
// const MyTotal = myArray.reduce((acc,currval)=>acc+currval,Inval)
const MyTotal = myArray.reduce(function(acc,currval){
    //console.log(`Accumulator is ${acc} and Current value is ${currval}`);
    
    return  acc+currval},Inval)
//console.log(MyTotal);


let ShoppingCart = [
    {
        Object : "Sugar" ,
        Price : 500
    },
    {
        Object : "Salt" ,
        Price : 350
    },
    {
        Object : "Milk" ,
        Price : 750
    },
    {
        Object : "Grocery" ,
        Price : 950
    },
]
//let CountedPrice = ShoppingCart.reduce(function(acc,item){
//     return acc+item.Price
// },0)

let CountedPrice = ShoppingCart.reduce((acc,item)=>acc+item.Price,0)
console.log(`Total price is ${CountedPrice}`);

