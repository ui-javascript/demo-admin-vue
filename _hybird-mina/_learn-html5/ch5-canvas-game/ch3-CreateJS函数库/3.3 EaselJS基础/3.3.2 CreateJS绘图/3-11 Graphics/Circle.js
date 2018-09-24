
function Circle(){
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        this._circleType = type;
        switch (type){
            case Circle.TYPE_RED:
                this.setColor("#ff0000");
                break;
            case Circle.TYPE_GREEN:
                this.setColor("#00ff00");
                break;
        }
    }
    this.setColor = function(color){
        this.graphics.beginFill(color);
        this.graphics.drawCircle(100,100,50);
        this.graphics.endFill();
    }
}
Circle.prototype = new createjs.Shape();
Circle.TYPE_RED = 1;
Circle.TYPE_GREEN = 2;