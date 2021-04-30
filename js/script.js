
function movement(){
    const box_1 = document.getElementById('box_1');
    var positionX = 0;
    var positionY = 200;

    
    var fst = setInterval(First, 1);
    function First(){
    
    positionX += 1;
    positionY +=1;
    box_1.style.left = positionX + "px";
    box_1.style.top = positionY + "px";
    // console.log(positionX);
    if (positionX == 215 && positionY == 415 ){  //&& positionY == 415
        clearInterval(fst);
        
       var  y =  setInterval(Move,1); //415
        function Move(){
            positionX += 1;
            positionY -=1;
            box_1.style.left = positionX + "px";
            box_1.style.top = positionY + "px";
            if (positionX == 415){
                clearInterval(y);
                
                var x = setInterval(X_Move, 1); //630
                function X_Move(){
                    positionX -= 1;
                    positionY -= 1;
                    box_1.style.left = positionX + "px";
                    box_1.style.top = positionY + "px";
                    if (positionX == 200){
                        clearInterval(x);
                        var xy = setInterval(top_Move, 1); //630
                        
                        function top_Move(){
                            positionX -= 1;
                            positionY += 1;
                            box_1.style.left = positionX + "px";
                            box_1.style.top = positionY + "px";
                            if (positionX == 0 && positionY == 200){
                                clearInterval(xy); 
                            }
                        }     
                    }  
                }  
            } 
    }
    } 
} 
}

setInterval(movement, 3340);






