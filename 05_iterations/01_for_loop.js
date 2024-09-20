for (let index = 1; index <= 10; index++) {

    // console.log(index);
    
}

for (let index = 0; index <= 10; index++) {
    const element = index
    if(index == 5){
        // console.log("5 is the number");
        
    }
    // console.log(element);
    
}

// console.log(element);    can't access outside the scope


for (let i = 1; i <= 20; i++) {
    
    // console.log(`Table of ${i}`);
    
    for (let index = 0; index <= 10; index++) {
        
        // console.log(`inner loop value ${index}`);
        
        // console.log(i + "*" + index + "=" + i * index);
        
    }
}

let myArray = ["Talha", "Ahmed", "salman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}