var stage = new createjs.Stage("gamView");
var ss = new createjs.SpriteSheet({
    "images":["runningGrant.png"],
  // "frames":{"regX":0, "height":292, "count":64, "regY":0, "width":165},
     "frames":{
        "height":292,
        "width":165,
        "count":64},
    "animations":{
        "run":[0,25,"jump"],
        "jump":[26,63,"run"]}
});

var s = new createjs.Sprite(ss,"run");
s.x = 100;
s.y = 100;

stage.addChild(s);
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick",stage);

