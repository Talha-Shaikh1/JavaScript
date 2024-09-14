// Singleton
// Object.create

// Object literals


// const mySym = Symbol("Key1")

// console.log(typeof mySym);

const user = {
    name: "Talha",
    "Full Name": "Muhammad Talha",
    ID: 4445,
    [mySym]: "Key1",
    Email: "Talha369852@gmail.com",
    isLoggedIn: false

}

// console.log(user["Full Name"]);
// console.log(user.name);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);


user.name = "Talha Shaikh";


// user.name = "umer shaikh";
// console.log(user);

user.greeting = function(){
    console.log("Hello User");
    
}

user.greeting2 = function(){
    console.log(`Hello User, ${this["Full Name"]}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());

Object.freeze(user);

// ab object ki koi bhe value update nh ho skti.