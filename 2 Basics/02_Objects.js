//Singleton
//Object.create

let MySym = Symbol("Key1");

let MyObj = {
    name : "Swapnil",
    [MySym] : "MyKey1",
    Age : 20,
    location : "Palus",
    email : "Swapnilkadam@gmail.com",
    isLoggedIn : false,
}

console.log(MyObj["location"]);
console.log(MyObj.location);

console.log(MyObj[MySym]);

MyObj.Age = 21;
console.log(MyObj);

Object.freeze(MyObj);
MyObj.Age = 22;
console.log(MyObj);


//////////////////////////////////////////////////////////////

let obj1 = {
    1:'a',
    2:'b'
}
let obj2 = {
    3:'a',
    4:'b'
}
let obj3 = {...obj1,...obj2};       //Object.assign(obj1,obj2)
console.log(obj3);


/////////// Destucturing

const course = {
    courseId : 22,
    courseInstructor : "Hitesh",
    Price : 250
}

const { courseInstructor : Instructor } = course
console.log(Instructor);
