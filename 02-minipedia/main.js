// Text variables (Dutch)
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL = "De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";

// Text variables (French)
let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR = "La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let titel = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let content = document.querySelector("#text");
let article = document.querySelector(".article");
let buttonFR = document.querySelector("#btn-fr");
let buttonNL = document.querySelector("#btn-nl");

let image = document.createElement("img"); //add image

//2. Set initial content on load

titel.innerText = titleNL;
subtitle.innerText = subtitleNL;
content.innerText = textNL; 


//3. Select buttons

   //buttonFR.disabled = true; // NL knop uitzetten (actief)

//4. Add event listeners
buttonNL.addEventListener("click", function(){

     titel.innerText = titleNL;    
    subtitle.innerText = subtitleNL;
    content.innerText = textNL;
    console.log("click");

buttonFR.disabled = false; //actief
buttonNL.disabled = true; //niet actief

})

buttonFR.addEventListener("click", function(){

    titel.innerText = titleFR;
    subtitle.innerText = subtitleFR;
    content.innerText = textFR;

    buttonFR.disabled = true;  //niet actief
    buttonNL.disabled = false; //actief
});

//5. Create, configure and append image

image.src = "./appel.jpg"; //img
image.alt = "Een rode appel"; //naam img
article.insertBefore(image, subtitle); //insert image before subtitles

/*andere manier*/

//let imgElement = document.createElement("img"); => element
//imgElement.src = ".appel.jpg";
//imgElement.alt = "een rode appel";
//document.querySelector(".article").append(imgElement); => append voegt de article gewoon onderaan aan, prepend zet het tussen de tetxt en titels?