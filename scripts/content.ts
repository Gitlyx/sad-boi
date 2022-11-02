document.getElementById("clickButton")?.addEventListener("click", drinkCoffee);
let coffeeCounter = 0;
let text = document.getElementById("sadtext");


function drinkCoffee () {
    //return image tag with src of the image
    var img = document.createElement("img");
    img.src = "/images/coffee.png";
    document.body.appendChild(img);
    coffeeCounter++;

    
    repalceImage();
}

function repalceImage() {
    if(coffeeCounter >= 10) {
    var img = document.createElement("img");
    img.src = "/images/pepega.png";
    document.getElementById("myState")?.replaceWith(img);
    document.getElementById("sadtext").innerHTML = `OK LETS GO (${coffeeCounter} coffees downed)`;

    }
}