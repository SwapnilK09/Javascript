let Name = "Swapnil"
RollNo = 2203038
console.log(`My name is ${Name} and my roll number is ${RollNo}`);      //Better way for string concatenation instead + (String interpolation)


//String methods

console.log(Name.length);

console.log(Name.toLowerCase());

let NewStering1 = Name.substring(0,3)
console.log(NewStering1);
let NewStering2 = Name.slice(2,-1);
console.log(NewStering2);     

let url = "https/www.youtube.com/watch?v=fozwNnFunlo&listPLu71SKxNbfoBuX3f4EOACle2ytRC5Q37&index11"
console.log(url.replace('.','?'))
