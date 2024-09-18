let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 100
    const b = 200
    var c = 300 // global scope
}

console.log(a);
console.log(b);
console.log(c); // global scope


function one(){
    let userName = "talha"


    function two (){
        const website = "youtube"
        console.log(userName);
        
    }

    // console.log(website); // Error
    two()
}

one()


if(true){
    const userName = "Talha"
    if(true){
        const website = "facebook"
        console.log(userName + website);
        
    }
    // console.log(website); // Error can't access out side of scope
    
}
// console.log(userName);  // Error can't access out side of scope
