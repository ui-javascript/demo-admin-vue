var canvas;
var stage;

createjs.MotionGuidePlugin.install(createjs.Tween);
var stage = new createjs.Stage("gameView");
var ball = new createjs.Shape();
var b = ball.graphics;
b.beginFill("#FF0000").drawCircle(0,0,50);
b.endFill();

createjs.Tween.get(ball,{loop:false},true)
    .to({guide:{path:[100,100,400,100,200,300],orient:true}},5000);
stage.addChild(ball);
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);
