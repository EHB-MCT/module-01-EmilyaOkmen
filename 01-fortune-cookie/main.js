const fortunes = [
    "A fresh start will put you on your way.",
    "Breathe in, breathe out, code.",
    "Your creativity will lead you to success.",
    "Trust the process; the logic will click into place soon.",
    "You will conquer the infinite loop before it crashes your browser.",
    "Today is the day you actually understand how Git works.",
    "The error message is not judging you; it is trying to help.",
    "You love peace, harmony and ChatGPT",
    "Change is happening in your life, so commit often!",
    "You will inherit a large sum of money and an undocumented codebase",
    "Your hard work will pay off soon(-ish).",
    "The best is yet to come. A semester of Javascript awaits you."
];

// 1. Select Elements
let display = document.querySelector("#fortune-display");

let button = document.querySelector("#cookie-btn"); 

//button ophalen //# => voor een id want als we '' gebruiken gaat hij denke dat het een type html is maar niet wat precies.
//console.log(display) //opgehaald in console

//display.innerText = 'Halloo'
//display.innerText = fortunes [0]; =>  random between 0 - frotune.length
//InnerText veranderd de tekst in de html

//display.innerText = fortunes[randomIndex]; => randomised de tekst in de arrays bij een refresh van de pagina en niet met button

/*queryselector = selecteert er 1 
queryselector = selecteer alle elementen die voldoen aan die voorwaarden 
=> eerste element word gereturned */


// 2. Add event Listener
//      generate a random index
//      get the fortune string
//      update the display

/*button.addEventListener("click", () => {
    console.log("click");
    display.innerText = fortunes[Math.floor(Math.random() * fortunes.length)];
}); */

button.addEventListener("click", function() {
    console.log("click");
    let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    display.innerText = randomFortune;
}); 
