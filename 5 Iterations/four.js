let language = ["js","java","c","cpp","python","html","css"]

// language.forEach( function (item){
//     console.log(item);
    
// })


language.forEach((val,index,arr)=>{
  //console.log(val,index,arr);
    
})

// function printMe(item){
//     //console.log(item);      //Reference
                
//             }
// language.forEach(printMe)


const coding = [
    {
        languageName : "JavaScript",
        languageFile : "js"

    },
    {
        languageName : "Python",
        languageFile : "py"

    },
    {
        languageName : "C++",
        languageFile : "cpp"

    }
]
coding.forEach((item)=>{
    console.log(item.languageFile);
    
})
