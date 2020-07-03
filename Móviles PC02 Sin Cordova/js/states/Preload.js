Preload = function(){

}

Preload.prototype = {
    preload:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //centrar el juego horizontalmente
        this.scale.pageAlignHorizontally = true;
        //centrar el juego verticalmente
        this.scale.pageAlignVertically = true;

        this.load.image("bg", "assets/images/bg.png");
        this.load.image("gameOver", "assets/images/gameover.png");
        this.load.image("gameTitle", "assets/images/gametitle.png");
        this.load.image("higher", "assets/images/higher.png");
        this.load.image("loading", "assets/images/loading.png");
        this.load.image("lower", "assets/images/lower.png");
        this.load.image("play", "assets/images/play.png");

        this.load.spritesheet("numbers","assets/images/numbers.png",100,100,10);
      
    },
    create:function(){
        console.log("Carga terminada");
        this.state.start("Menu");
    }
}