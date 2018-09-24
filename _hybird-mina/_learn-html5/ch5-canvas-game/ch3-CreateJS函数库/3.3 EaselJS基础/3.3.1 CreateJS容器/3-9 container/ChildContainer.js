function ChildContainer(){
    var Rect = new createjs.Shape();
    Rect.graphics.beginFill("#ff0000");
    Rect.graphics.drawRect(5,5,50,50);
    Rect.graphics.endFill();;
    var Text = new createjs.Text("Hello","30px Arial", "#ffffff");
    this.addChild(Rect);
    this.addChild(Text);
}
ChildContainer.prototype = new createjs.Container();