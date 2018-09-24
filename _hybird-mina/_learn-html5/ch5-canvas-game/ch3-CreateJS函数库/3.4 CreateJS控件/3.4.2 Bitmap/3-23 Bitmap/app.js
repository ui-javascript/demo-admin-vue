var stage = new createjs.Stage("gamView");
var gameView = new createjs.Container();
stage.addChild(gameView);

var bitmap = new createjs.Bitmap("9.jpg");
gameView.addChild(bitmap);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", function(){
    stage.update();
});
