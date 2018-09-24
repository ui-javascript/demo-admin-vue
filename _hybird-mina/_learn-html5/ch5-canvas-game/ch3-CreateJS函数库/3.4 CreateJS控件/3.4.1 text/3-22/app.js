var rect;
var count = 0 ;

canvas = document.getElementById("gamView");
stage = new createjs.Stage(canvas);

text = new createjs.Text("test on the Canvas ... 0!", "36px Arial", "#FFF");
text.x = 10;
text.y = 10;
text.rotation  = 20;
stage.addChild(text);

rect = new createjs.Shape();
rect.x = text.x;
rect.y = text.y;
rect.rotation = text.rotation;
stage.addChildAt(rect,0);

createjs.Ticker.setFPS(100);
createjs.Ticker.addEventListener("tick", handlertick);

function handlertick(e){
    count++;
    text.text = "test on the Canvas ..." + count +"!";
    rect.graphics.clear().beginFill("#f00").drawRect(-10,-10,text.getMeasuredWidth()+20,50);
    stage.update(e);
}