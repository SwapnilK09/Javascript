let month = 4;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid Input");
        
        break;
}


//Null Coalecing operator(??)

let val;
val = undefined ?? 10
console.log(val);

//ternairy operator

let age = 20
age >= 18 ? console.log("Eligible for voting") : console.log("Not eligible for voting");
;

