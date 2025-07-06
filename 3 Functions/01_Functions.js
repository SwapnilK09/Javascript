function AddtwoNumbers(Num1,Num2){
    let Res = Num1+Num2
    return Res
}
console.log(AddtwoNumbers(2,3));

console.log("**********************************************************************");

function UserLogin(username){
    if(!username){
        console.log("Please enter the valid username");
    }
    else{ 
        return `${username} is logged in`
    }
}
console.log(UserLogin("Swapnil"))

console.log("******************************************************************** */")

function calculateCartPrice(...num1){           //...num1 rest parameter
    return num1
}
console.log(calculateCartPrice(200,300,400,300,200))

console.log("*************************************************************************");

let user = {                            //object
    username : "Saurav",
    password : 2203005
}
function userDetails(AnyObject)
{
    console.log(`Username is ${AnyObject.username} and Password is ${AnyObject.password}`)
}
userDetails(user)

console.log("*************************************************************************");


let arr = [20,30,40,50,60]              //Global scope
function HandleArray(getArray){
    console.log(getArray)               //Block scope
}
HandleArray(arr)