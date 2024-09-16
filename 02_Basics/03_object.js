const obj = new Object();
// console.log(obj);

const appUser = {
    email: "Talha@gmail.com",
    fullName: {
        Username: {
            firstName: "Talha",
            lastName: "Shaikh"
        }
    }
}

console.log(appUser.fullName.Username.firstName);
