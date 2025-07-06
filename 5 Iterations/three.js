let arr = ["Saurav","Bhushan","Varad","Swapnil"]

for (const element of arr) {
    //console.log(element);
}


//Maps

const map = new Map()
map.set('IN','India')
map.set('AUS','Australia')
map.set('BAN','Bangladesh')

for (const [key , value] of map) {
//    console.log(key, '=', value);
      
}

//Objects iteration
let myObj ={
    js : "JavaScript",
    cpp : "C++",
    py : "Python"
}

for (const key in myObj) {
   // console.log(`${key} is used for ${myObj[key]}`);
    
}

//Array
let Names = ["Saurav","Bhushan","Varad","Swapnil"]
for (const key in Names) {
   console.log(Names[key]);
   
}