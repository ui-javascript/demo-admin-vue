var stage = new createjs.Stage("gamView");
var gameView = new createjs.Container();
stage.addChild(gameView);
gameView.x = 100;
gameView.y = 100;
var c = new ChildContainer();
gameView.addChild(c);
stage.update();