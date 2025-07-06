if(2==2){
    console.log("Hello World");
    
}

//************************************************************************** */

let userLoggedIN = true;
let debitCard = true;
let LoggedInfromGoogle = false;
let LoggedInfromEmail = true;

if(userLoggedIN && debitCard){
    console.log("User allowed to buy courses");
    
}
else{
    console.log("Not allowed");
    
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let age = 25                                //Nested if or we can also use ladder
if(age>18){
    if(age>21)
    {
        console.log("User aloowed to both classes");
        
    }
    else{
        console.log("User alloed to acess only one clsss");
        
    }
    
}
else{
    console.log("User not allowed to access single class");
    
}