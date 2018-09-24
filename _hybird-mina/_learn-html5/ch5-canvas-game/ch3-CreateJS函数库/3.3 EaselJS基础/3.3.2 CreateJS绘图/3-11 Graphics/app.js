var stage = new createjs.Stage("gamView");
var gameView = new createjs.Container();
stage.addChild(gameView);

//var Rect = new createjs.Shape();
//Rect.graphics.beginFill("#ff00ff");
//Rect.graphics.drawRect(0,0,100,50);
//gameView.addChild(Rect);
//
//var Ellipse = new createjs.Shape();
//Ellipse.graphics.beginFill("#00ff00");
//Ellipse.graphics.drawEllipse(100,100,100,80);
//gameView.addChild(Ellipse);

gameView.x = 100;
gameView.y = 100;

var c= new Circle();
c.setCircleType(1);
stage.addChild(c);
stage.update();