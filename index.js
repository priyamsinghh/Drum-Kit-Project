//tells which buttuon is clicked
for(var i = 0 ;i<document.querySelectorAll(".drum").length;i++ )
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   
        var key = this.innerHTML;
        makesound(key);
        buttonAnimation(key);
    });
}


//tells which key was pressed
document.addEventListener("keypress",function(event)
{
    makesound(event.key); //.key tells which key was pressed
    buttonAnimation(event.key);
});

//choose which sound to play
function makesound(key)
{
    switch(key)
        {
            case "w":var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;
            case "a":var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
            case "s":var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
            case "d":var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
            case "j":var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
            case "k":var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
            case "l":var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
            default: console.log(key);
        }
}

//button animation
function buttonAnimation(keyPressed)
{
    var activeKey = document.querySelector("." + keyPressed);
    activeKey.classList.add("pressed");
}
//button animation
function buttonAnimation(keyPressed)
{
    var activeKey = document.querySelector("." + keyPressed);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },400);
}