// * getElementById JavaScript DOM method hai jo HTML document mein ek unique element ko uski id attribute ke zariye select karne ke liye use hota hai.
// * Har id document ke andar unique honi chahiye, yani kisi bhi document mein ek hi element ka specific id ho sakta hai.
// * Agar method ko specified id ke saath element milta hai, toh yeh us element ko return karta hai, warna null return karta hai.

// document.getElementById('id-heading')    is tarha HTML ka pora element select hota ha.ab hum is pry element k alag alag element ki value dekh skty hen.

// document.getElementById('id-heading').id  is tarha hum is element ki id ki value dekh skty hen.

// document.getElementById('id-heading').className is sy hum class ki value access kr skty hen.

// document.getElementById('id-heading').getAttribute('class')

// document.getElementById('id-heading').getAttribute('id')      is tarha hum element k attributes ki value access kr skty hen.

// document.getElementById('id-heading').setAttribute('class', 'first-heading')  is tarha hum element k liye koi bhi attribute set kr skty hen.


const h1 = document.getElementById('id-heading')  // ab aasani sy is element ki koi bhi key access kr skty hen ab chounky ya object ha tu hum . notation sy access krengy.

h1.style.backgroundColor = "green"

// ab hamry pas element k content ko access krny k liye 3 properties hen.
// 1 innerText : h1.innerText             ya sirf wo content show kryga jo visible ha.
// 2 innerContent : h1.innerContent       ya sirf pora content hi show kry ga agr chay wo visible na hu lekin agr element k andar aur element inject kiye gye hen tu usko show nh kryga.
// 3 innerHTML: h1.innerHTML              ya pory content k sath sath un element ko bhi show kry ga jo inject kiye gye hen.



// querySelector

// * querySelector ek JavaScript method hai jo HTML DOM (Document Object Model) ka hissa hai.
// * Yeh method pehle element ko return karta hai jo provided CSS selector ke saath match karta ho.
// * Isko kisi bhi HTML element ko select karne ke liye use kiya ja sakta hai, jaise IDs, classes, tags, attributes, etc.
// * Agar match hone wala element nahi milta, toh yeh null return karta hai.

// document.querySelector('h1')     // is tarhan element select hoga jo pehla h1 hoga.
// document.querySelector('#first-heading')    // is tarhan first-heading jis element ki id hogi wo select ho jayga.
// document.querySelector('.first-heading')    // is tarhan first-heading jis element ki class hogi wo select ho jayga.






// querySelectorAll

// * querySelectorAll ek JavaScript DOM method hai jo HTML document mein un sab elements 
// ko select karta hai jo provided CSS selector(s) ke saath match karte hain.

// * Yeh method un sab elements ka static NodeList return karta hai jo match hote hain. 
// Yeh ek array-like object hota hai, lekin yeh live updates nahi karta jaise HTML collections mein hota hai.

// Class se multiple elements ko select karna
// let elements = document.querySelectorAll('.myClass');

// Sab paragraph elements ko select karna
// let elements = document.querySelectorAll('p');

// Multiple selectors use karte huye elements ko select karna
// let elements = document.querySelectorAll('div, p');

// Key Points:

// Static NodeList: querySelectorAll ka output ek NodeList hota hai jo static hota hai, matlab agar DOM baad mein change ho jaye, toh NodeList update nahi hota.
// Array-like: NodeList ek array-like structure hai, aap ispar forEach, for...of, aur indexing ka use kar sakte hain.
// Multiple Matches: Yeh sab elements return karta hai jo selector ke saath match karte hain, unlike querySelector jo sirf pehla element return karta hai.







// getElementsByClassName

// getElementsByClassName ek JavaScript DOM method hai jo document ke andar sab un elements ko select karta hai jinki class specified value ke saath match karti ho.

// Yeh method ek live HTMLCollection return karta hai, jo dynamically update hota hai agar DOM mein changes aayein.

// Yeh method multiple elements ko return karta hai, kyunki ek class attribute ko multiple elements mein use kiya ja sakta hai.

// Key Points:

// Live Collection: getElementsByClassName ek live HTMLCollection return karta hai. Agar document mein koi changes hoon (jaise elements ko add ya remove kiya jaye), toh yeh collection apne aap update ho jata hai.
// Multiple Elements: Yeh method ek list (HTMLCollection) return karta hai, kyunki ek class multiple elements mein ho sakti hai.
// No Dot (.) Required: Unlike querySelector, aapko . lagane ki zarurat nahi hoti class ke aage. Sirf class ka naam pass karna hota hai.


// Difference with querySelectorAll:

// getElementsByClassName sirf class-based selection karta hai, jabke querySelectorAll CSS selectors ko support karta hai.
// getElementsByClassName ek live HTMLCollection return karta hai, jabke querySelectorAll ek static NodeList return karta hai.

// Usage Tip:

// Agar aapko sirf specific class-based elements ko target karna hai aur live updates chahiyein, toh getElementsByClassName fast aur efficient method hai.