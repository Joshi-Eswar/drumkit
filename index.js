var buttonNumber=document.querySelectorAll(".drum").length;
var w=new Audio('sounds/tom-1.mp3')
w.play();
for(var i=0;i<buttonNumber;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonClicked=this.innerHTML;
    buttonPressed(buttonClicked);
    animation(buttonClicked);
    });

}
document.addEventListener("keypress",function(event){
    buttonPressed(event.key);
    animation(event.key);
});
function buttonPressed(key){
   
    switch(key){
        case ("w"):
            var w=new Audio('tom-1.mp3');
            w.play();
            break;
        case ("a"):
            var w=new Audio('tom-2.mp3');
            w.play();
            break;
        case ("s"):
            var w=new Audio('tom-3.mp3');
            w.play();
            break;
        case ("d"):
            var w=new Audio('tom-4.mp3');
            w.play();
            break;
        case ("j"):
            var w=new Audio('crash.mp3');
            w.play();
            break;
        case ("k"):
            var w=new Audio('kick-bass.mp3');
            w.play();
            break;
        case ("l"):
            var w=new Audio('snare.mp3');
            w.play();
            break;
    }
}
function animation(currentKey){
var animator=document.querySelector("."+currentKey);
animator.classList.add("pressed");
setTimeout(function(){
    animator.classList.remove("pressed");
},100);

}