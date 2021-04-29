const box_1 = document.getElementById('box_1');

var positionX = 0;
var positionY = 200;



var animationX = setInterval(moveX, 10);

function stopX(){
    clearInterval(animationX);
}



function moveX(){
    positionX += 1;
    positionY +=1;
    box_1.style.left = positionX + "px";
    box_1.style.top = positionY + "px";
    // console.log(positionX);
    if (positionX == 215){
        stopX()
        
       var  y =  setInterval(Move,10); //415
        function Move(){
            positionX += 1;
            positionY -=1;
            box_1.style.left = positionX + "px";
            box_1.style.top = positionY + "px";
            if (positionY == 215){
                clearInterval(y);
                
                var x = setInterval(X_Move, 10); //630
                function X_Move(){
                    positionX -= 1;
                    positionY -= 1;
                    box_1.style.left = positionX + "px";
                    box_1.style.top = positionY + "px";
                    if (positionX == 200){
                        clearInterval(x);
                        var xy = setInterval(top_Move, 10); //630
                        function top_Move(){
                            positionX -= 1;
                            positionY += 1;
                            box_1.style.left = positionX + "px";
                            box_1.style.top = positionY + "px";
                            if (positionX == 0){
                                clearInterval(xy);
                            }
                        }
                        
                    }
                }
                
                
               
            }
    }
      
        // if (positionY == 150){
        //     clearInterval(y);
        //     // setInterval(
        //     // function MoveY(){
        //     //     positionX += 1;
        //     //     positionY -=1;
        //     //     box_1.style.left = positionX + "px";
        //     //     box_1.style.top = positionY + "px";
        //     // }, 10);
        // }
         
    }
}






