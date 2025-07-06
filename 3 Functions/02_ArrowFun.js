let user = {
    username : "Saurav",
    Price : 299,

    WelcomeMessage : function(){
        console.log(`${this.username} , Welcome to the website`);
        
        //console.log(this);............Returns the objects in current context
        }
}
user.WelcomeMessage()
user.username="Sam"
user.WelcomeMessage()

// console.log(this);..............Returns the Empty object becoz this represents the node environment


const addTwo= (num1 , num2) => {
    return (num1+num2)              // Simple arrow function
}
console.log(addTwo(4,5));

const addthree = (n1,n2,n3) => (n1+n2+n3)       //Implicit return
console.log(addthree(4,5,1))

const addFour = (a,b,c,d) => (a+b+c+d)
console.log(addFour(1,2,3,4))

const addF5 = (a,b,c,d,e) => {
    return (a+b+c+d+e)
}
console.log(addF5(1,2,3,4,5));