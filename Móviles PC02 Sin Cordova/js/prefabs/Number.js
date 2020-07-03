Number = function(game,x,y,currentIndex){
    Phaser.Sprite.call(this,game,x,y,"numbers",currentIndex);
    this.game = game;
    this.currentIndex = currentIndex
    this.anchor.setTo(0.5,0.5)
    //this.x = x
    //this.y = y
    //this.x = this.game.world.centerX
    //this.y = this.game.world.centerY
    //this.checkWorldBounds = true;
    //this.outOfBoundsKill = true;
    console.log("Se creó")
    this.game.add.existing(this);
}


Number.prototype = Object.create(Phaser.Sprite.prototype);
Number.prototype.constructor = Number;

Number.prototype.DoTween = function(xPos, yPos){
    this.tween = this.game.add.tween(this);
    this.tween.to({ x: [xPos], y: [yPos] }, 300, "Linear");
    this.tween.start();
};