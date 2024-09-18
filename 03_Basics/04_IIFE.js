//                Immediately ivoked function experession               
(function grreting(){
    console.log('hello world');
    
})();  // semicolon is compulsory else "typeError"

( (name) => {
    console.log(`hello ${name}`);
    
} )('Talha')