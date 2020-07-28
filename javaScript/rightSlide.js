
// converted the class to selector 
var bar = document.querySelector(".bar");
var aside = document.querySelector(".aside");
var main = document.querySelector(".main");
var direction = document.querySelector(".direction");
var sideh = document.querySelector(".side > h1");
var sidep = document.querySelector(".side > p");
var side = document.querySelector(".side");

let checkbox = document.getElementById("move").addEventListener("click", control);   
function control(){
    if (checkbox !== true){

        bar.style.visibility = "hidden";
        aside.style.width = "25%";
        direction.style.right = "24%";
        main.style.width = "75%";
        sideh.style.fontSize = "3.5vmax";
        sidep.style.fontSize = "1.5vmax";
        side.style.paddingTop = "18vmax";
        sidep.style.transition = "all 1s";
        sideh.style.transition = "all 1s";
        bar.style.transition = "all 1s";
        main.style.transition = "all 1s";
        side.style.transition = "all 1s";

        return true;

    }else{
        bar.style.visibility = "visible";
        aside.style.width = "0";
        direction.style.right = "2em";
        main.style.width = "97%";
        sideh.style.fontSize = "2vmax";
        sidep.style.fontSize = "1vmax";
        side.style.paddingTop = "21vmax";
        sidep.style.transition = "all 1s";
        sideh.style.transition = "all 1s";
        bar.style.transition = "all 1s";
        main.style.transition = "all 1.5s";
        side.style.transition = "all 1s";

        return false;
    }
}
