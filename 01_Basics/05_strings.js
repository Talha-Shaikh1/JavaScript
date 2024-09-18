const name = "Talha";
const repoCount = 100;

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Talha-Shaikh-com');
console.log(gameName[4]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 7);
console.log(newString);


const string1 = gameName.slice(1, 3);
console.log(string1);

const str2 = '               Talha                ';
console.log(str2);
console.log(str2.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url);

console.log(url.replace('%20', '-'));
console.log(url.includes('talha'));
console.log(gameName.split('-'));

