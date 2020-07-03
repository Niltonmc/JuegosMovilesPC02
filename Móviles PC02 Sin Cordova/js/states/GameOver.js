GameOver = function(){}

GameOver.prototype = {
    create:function(){
        console.log("Game Over Cargado Exitosamente");
        let background = this.add.sprite(0,0,"bg")

        let btnGameOver = this.add.sprite(0,0,"gameOver")

        btnGameOver.anchor.setTo(0.5,0.5)
        btnGameOver.x = this.world.centerX
        btnGameOver.y = this.world.centerY

        btnGameOver.inputEnabled = true
    
        btnGameOver.events.onInputDown.add(this.GoMenu, this)
    },
    GoMenu:function(){
        console.log("Envia la carga de menu");
        this.state.start("Menu")
    }
}