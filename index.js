// document.querySelector("button").addEventListener("click",handleClick);
// // we dhen we did not use the paranthesis() when we call the handleclick because if we will use the paranthesis if we will refersh the file
// // then it will call but we want when we press the the button then it should we call.

// function handleClick(){
//     alert("i got press");
// }

// document.querySelector("button").addEventListener("click",function(){
//     alert("i got press");
// });

var numberOfDomButton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDomButton;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        this.style.color="white";
        var a=this.innerHTML;
        makesound(a);
        buttonanimation(a);
        // switch (a) {
        //     case "w":
        //         var crash=new Audio("sounds/tom-1.mp3");
        //         crash.play();
        //         break;
        //     case "a":
        //         var kick=new Audio("sounds/snare.mp3");
        //         kick.play();
        //         break;
        //     case "s":
        //         var snare=new Audio("sounds/crash.mp3");
        //         snare.play();
        //         break; 
        //     case "d":
        //         var tom1=new Audio("sounds/tom-2.mp3");
        //         tom1.play();  
        //         break; 
        //     case "j":
        //         var tom2=new Audio("sounds/tom-3.mp3");
        //         tom2.play();
        //         break;
        //     case "k":
        //         var tom3=new Audio("sounds/tom-4.mp3");
        //         tom3.play();
        //         break;
        //     case "l":
        //         var tom4=new Audio("sounds/kick-bass.mp3");
        //         tom4.play();
        //         break;  
        //     default:
        //         console.log(buttonInnerHTML);
        //         break;
        // }
    });
}
document.addEventListener("keypress",function(event){
 makesound(event.key);
 buttonanimation(event.key);
});

function makesound(key){

    switch (key) {
        case "d":
            var crash=new Audio("sounds/tom-1.mp3");
            crash.play();
            break;
        case "a":
            var kick=new Audio("sounds/snare.mp3");
            kick.play();
            break;
        case "s":
            var snare=new Audio("sounds/crash.mp3");
            snare.play();
            break; 
        case "d":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();  
            break; 
        case "j":
            var tom2=new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
        case "k":
            var tom3=new Audio("sounds/tom-4.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("sounds/kick-bass.mp3");
            tom4.play();
            break;  
        default:
            console.log(buttonInnerHTML);
            break;
    }
}
function buttonanimation(currentkey){

    var activebutton=document.querySelector("."+currentkey);

    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("presed");
    },100);
}

