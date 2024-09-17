const obj = new Object();
// console.log(obj);

const uberUser = new Object();

uberUser.email = "Talha@gmai.com"
uberUser.name = "Talha Shaikh"
uberUser.isLoggedIn = true

const appUser = {
    email: "Talha@gmail.com",
    fullName: {
        Username: {
            firstName: "Talha",
            lastName: "Shaikh"
        }
    }
}

// console.log(appUser.fullName.Username.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1 , obj2);
// console.log(obj3);
const obj4 = {...obj1, ...obj3}
// console.log(obj4);

const user = [
    {
        id: 1,
        email: "email@gmail.com"
    },
    {
        id: 1,
        email: "email@gmail.com"
    },{
        id: 1,
        email: "email@gmail.com"
    },{
        id: 1,
        email: "email@gmail.com"
    },
]

console.log(user[1].email);
console.log(uberUser);
console.log(Object.keys(uberUser))
console.log(Object.values(uberUser));
console.log(Object.entries(uberUser));
console.log(uberUser.hasOwnProperty('name'));
console.log(uberUser.hasOwnProperty('id'));

