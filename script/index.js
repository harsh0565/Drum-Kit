// for clicking keys on screen
var num = document.querySelectorAll(".drum").length;
for ( var  i =0; i < num; i++)
{
     document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}


// for pressing keys on keyboard
document.addEventListener("keydown",function(Event){
    makesound(Event.key)
    buttonanimation(Event.key)
})
//     function for action
function makesound(key)
{
     switch (key) {
          case 'q':
          case 'Q':
          var tom1 = new Audio("sounds/tom-1.mp3")
               tom1.play();
               break;
          case 'a':
          case 'A':
               var tom2 = new Audio("sounds/tom-2.mp3")
               tom2.play();
               break;
               
          case 's':
          case 'S':
               var tom3 = new Audio("sounds/tom-3.mp3")
               tom3.play();
               break;
          case 'd':
          case 'D':
               var tom4 = new Audio("sounds/tom-4.mp3")
               tom4.play();
               break;
          case 'j':
          case 'J':
               var tom5 = new Audio("sounds/crash.mp3")
               tom5.play();
               break;
          case 'k':
          case 'K':
               var tom6 = new Audio("sounds/snare.mp3")
               tom6.play();
               break;
          case 'p':
          case 'P':
               var tom7 = new Audio("sounds/kick-bass.mp3")
               tom7.play();
               break;
          default: alert("Press spacebar Key");
          break;
       }

}
function handleclick () {
     var btn = this.innerHTML;
     makesound(btn)
     buttonanimation(btn)
    
   }
   function buttonanimation(currentkey){
     var activebutton = document.querySelector("." + currentkey);
      activebutton.classList.add("pressed");

      setTimeout(function(){
          activebutton.classList.remove("pressed");
      },100);

   }