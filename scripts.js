function leftArrowPressed() {
                var element = document.getElementById("image");
                element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
                var element = document.getElementById("image");
                element.style.left = parseInt(element.style.left) + 5 + 'px';
            }

            function upArrowPressed() {
                var element = document.getElementById("image");
                element.style.top = parseInt(element.style.top) - 5 + 'px';
            }

            function downArrowPressed() {
                var element = document.getElementById("image");
                element.style.top = parseInt(element.style.top) + 5 + 'px';
            }

            function moveSelection(event) {                    
                switch (event.keyCode) {
                    case 37:
                        leftArrowPressed();
                    break;

                    case 39:
                        rightArrowPressed();
                    break;

                    case 38:
                        upArrowPressed();
                    break;

                    case 40:
                        downArrowPressed();
                    break;
                }
            };


                function docReady()
        {
          window.addEventListener('keydown', moveSelection);
        }

function move_image(str){
    var step=100; // change this to different step value
switch(str){
case "down":
var x=document.getElementById('image1').offsetTop;
x= x + step;
document.getElementById('image1').style.top= x + "px";
break;

case "up":
var x=document.getElementById('image1').offsetTop;
x= x -step;
document.getElementById('image1').style.top= x + "px";
break;

case "left":
var y=document.getElementById('image1').offsetLeft;
y= y - step;
document.getElementById('image1').style.left= y + "px";
break;

case "right":
var y=document.getElementById('image1').offsetLeft;
y= y + step;
document.getElementById('image1').style.left= y + "px";
break;
}

}

function reset1(){
clearTimeout(my_time);
document.getElementById('image1').style.left= "500px";
document.getElementById('image1').style.top= "100px";
document.getElementById("msg").innerHTML="";

}



// function move_image(str) {

// var x=document.getElementById('image1').offsetTop;
// x= x +100;
// document.getElementById('image1').style.top= x + "px";

// }

function disp(){
var step=1; // Change this step value
var y=document.getElementById('image1').offsetTop;
var x=document.getElementById('image1').offsetLeft;
if(y < 600 ){y= y +step;
document.getElementById('image1').style.top= y + "px"; // vertical movment
}else{
if(x < 800){x= x +step;
document.getElementById('image1').style.left= x + "px"; // horizontal movment
}
}
//////////////////////

}

function timer(){
disp();
var y=document.getElementById('image1').offsetTop;
var x=document.getElementById('image1').offsetLeft;
document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
my_time=setTimeout('timer()',10);
}

