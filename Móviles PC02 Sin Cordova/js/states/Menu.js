Menu = function(){}

Menu.prototype = {
    create:function(){
        console.log("Menu Cargado Exitosamente");
        let background = this.add.sprite(0,0,"bg")

        let gameTitle = this.add.sprite(0,0,"gameTitle")

        gameTitle.anchor.setTo(0.5,0.5)
        gameTitle.x = this.world.centerX 
        gameTitle.y = this.world.centerY - 200

        let btnPlay = this.add.sprite(0,0,"play")

        btnPlay.anchor.setTo(0.5,0.5)
        btnPlay.x = this.world.centerX
        btnPlay.y = this.world.centerY + 200

        btnPlay.inputEnabled = true
    
        btnPlay.events.onInputDown.add(this.GoGame, this)
    },
    GoGame:function(){
        console.log("Envia la carga de game");
        this.state.start("Game")
    }
}