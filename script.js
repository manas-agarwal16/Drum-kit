// addEventListener("a",b) is a js function which include two parameter. one is behaviour other is function call. Behaviour like click, mousemove and function call is to perform a funtion when behaviour is noticed in addEvenetListener
// IMPORTANT NOTE: function call in addEventListener should not contain () paranthesis because if it contain then the function will get called as compiler run through it so the output will get implemented in onload itself.
// document.querySelector("button").addEventListener("click",music); instead of this we can also use anonumous function just paste the whole function() with no name inplace of funtion call.
// for adding EventLister to all of the buttons


//note we have applied addEventListener to whole document kiuki key kisi button ki thodi hoti h.

//checking for keyboard press.
document.addEventListener("keypress",function(event) 
//function(event) --> event gives the properties of the key which get pressed.

{
    var key = event.key; //event.key gives which key got pressed.
    makeSound(key); //function defined below to make sound.
});

//checking for click
var numberOfDrumButtons = document.querySelectorAll(".Drum").length;

// this for loop is going to add EventListener to all od the drum buttons.
for(var i = 0 ; i < numberOfDrumButtons ; i++){ 

    document.querySelectorAll(".Drum")[i].addEventListener("click",function() { 

        // this. function gives which element is called the function.
        var clickedButton = this.innerHTML;
        makeSound(clickedButton);
    });
}

function makeSound(tune){
    switch(tune){ //event.key gives which key is pressed
        case "w": 
            var music = new Audio("sounds/tom-1.mp3"); //its same as audio tag in html.
            music.play();
            break;
        

        case "a": 
            var music = new Audio("sounds/kick.mp3"); //its same as audio tag in html.
            music.play();
            break;
        

        case "s": 
            var music = new Audio("sounds/tom-2.mp3"); //its same as audio tag in html.
            music.play();
            break;
        

        case "d": 
            var music = new Audio("sounds/crash.mp3"); //its same as audio tag in html.
            music.play();
            break;
        

        case "j" : 
            var music = new Audio("sounds/tom-3.mp3"); //its same as audio tag in html.
            music.play();
            break;
        

        case "k" :
            var music = new Audio("sounds/snare.mp3"); //its same as audio tag in html.
            music.play();
            break;
        

        case "l" : 
            var music = new Audio("sounds/tom-2.mp3"); //its same as audio tag in html.
            music.play();
            break;
    }      
}

