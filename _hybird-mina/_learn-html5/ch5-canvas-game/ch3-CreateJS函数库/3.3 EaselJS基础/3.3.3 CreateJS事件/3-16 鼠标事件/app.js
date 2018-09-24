var stage = new createjs.Stage("gamView");
var gameView = new createjs.Container();
stage.addChild(gameView);

var Rect = new createjs.Shape();
Rect.graphics.beginFill("#ff00ff");
Rect.graphics.drawRect(0,0,100,100);
gameView.addChild(Rect);

stage.update();

//Rect.addEventListener("click",function(){
//    alert("µ„¡ÀÕº–Œ");
//});

//Rect.addEventListener("click",function(e){
//    alert("X=" + e.localX + "--Y=" + e.localY);
//});

//Rect.addEventListener("dblclick",function(e){
//    alert("X=" + e.localX + "--Y=" + e.localY);
//});
createjs.Ticker.setFPS(10);
createjs.Ticker.addEventListener("tick", handlerTick);
var speedX = 10;
function handlerTick(){
    //if(Rect.X <= 200){
    //    speedX = speedX;
    //}
    if(Rect.X >= 200){
       // alert(speedX);
        speedX = -speedX;
    }
    Rect.x += speedX;
    stage.update();
}