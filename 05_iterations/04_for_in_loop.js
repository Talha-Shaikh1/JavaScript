const myObject = {
    js: "JavaScript",
    py: "Python",
    cpp: "C++",

}

for (const key in myObject) {
    console.log(`${key} shorcut for ${myObject[key]}`);
    
}

const myArray = ["js", "py", "cpp"];
for (const key in myArray) {
    console.log(myArray[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }