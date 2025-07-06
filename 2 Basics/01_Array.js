const MyArray = [1,2,3,4,5]
console.log(MyArray)

let NewAry1 = MyArray.slice(1,4);
console.log(NewAry1);

let NewAry2 = MyArray.splice(1,2);
console.log(MyArray)
console.log(NewAry2);


let NewA1 = [1,2,3,4,5,6,7]
let NewA2 = [7,6,7,8,9]

let CombinedArray = NewA1.concat(NewA2);
//console.log(CombinedArray);
console.log(...NewA1,...NewA2);

let AnotherArray = [1,2,3,4,[0,9,8,7,[11,22,33,44,[111,222,333]]]]
let DissolvedArray = AnotherArray.flat(Infinity);
console.log(DissolvedArray);

console.log(Array.from('Swapnil'));

let N1 = 'Rohan'
let N2 = 'Rahul'
let N3 = 'Raj'
let N4 = 'Omkar'
console.log(Array.of(N1,N2,N3,N4));
