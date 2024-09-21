const arr = [1, 3, 4, 6, 8]

// console.log(arr);


for (const array of arr) {
    // console.log(array);
    
}

const greetings = "Hello World!";
for (const greet of greetings) {
    
    if(greet == " "){
        continue
    }
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('PAK', "Pakistan")
map.set('IN', "India")
map.set('FR', "France")
map.set('SR', "Srilanka")
map.set('PAK', "Pakistan")

console.log(map);


for (const [key , value] of map) {
    console.log(key, ':-', value);
    
}

const obj = {
    1: "Talha",
    2: "Shaikh"
}

for (const o of obj) {
    // console.log(o);
    
}