Game = function(){}

Game.prototype = {
    create:function(){
        console.log("Juego Cargado Exitosamente");
        this.background = this.add.sprite(0,0,"bg")

        this.score = 20

        this.btnHigher = this.add.sprite(0,0,"higher")

        this.btnHigher.anchor.setTo(0.5,0.5)
        this.btnHigher.x = this.world.centerX
        this.btnHigher.y = this.world.centerY - 200

        this.btnHigher.isHigher = true
        this.btnHigher.inputEnabled = true
    
        this.btnHigher.events.onInputDown.add(this.CheckHigherVal, this)
        
        this.btnLower = this.add.sprite(0,0,"lower")

        this.btnLower.anchor.setTo(0.5,0.5)
        this.btnLower.x = this.world.centerX
        this.btnLower.y = this.world.centerY + 200

        this.btnLower.isHigher = false
        this.btnLower.inputEnabled = true
    
        this.btnLower.events.onInputDown.add(this.CheckLowerVal, this)
        
        this.currentIndex = this.game.rnd.integerInRange(0, 9);

        this.currentNumber = new Number(this.game,this.world.centerX,this.world.centerY,this.currentIndex);
        /*
        this.currentNumber = this.game.add.sprite(200, 200,"numbers",this.currentIndex);
        this.currentNumber.anchor.setTo(0.5,0.5)
        this.currentNumber.x = this.world.centerX
        this.currentNumber.y = this.world.centerY
        this.currentNumber.currentIndex = this.currentIndex;
        */

        //this.newNumber = 0
    },
    update:function(){
     
    },

    CheckHigherVal:function(){
        console.log("Checa Valor Mayor");
        this.newNumberIndex = this.game.rnd.integerInRange(0, 9);
        this.DoTween();
        if(this.newNumberIndex >  this.currentNumber.currentIndex){
            this.score =  this.score + 10
        }else{
            this.score =  this.score - 5
        }

        if(this.score <= 0){
            this.state.start("GameOver");
        }

        this.currentNumber = this.new_number
        this.currentNumber.currentIndex = this.newNumberIndex
        //this.currentNumber.loadTexture("numbers", this.currentNumber.currentIndex);
        console.log("El nuevo número es: " + this.newNumberIndex)
        console.log("El puntaje actual es: " + this.score)
    },

    CheckLowerVal:function(){
        console.log("Checa Valor Menor");
        this.newNumberIndex = this.game.rnd.integerInRange(0, 9);
        this.DoTween();
        if(this.newNumberIndex <  this.currentNumber.currentIndex){
            this.score =  this.score + 10
        }else{
            this.score =  this.score - 5
        }

        if(this.score <= 0){
            this.state.start("GameOver");
        }

        this.currentNumber = this.new_number
        this.currentNumber.currentIndex = this.newNumberIndex
        //this.currentNumber.loadTexture("numbers", this.currentNumber.currentIndex);
        console.log("El nuevo número es: " + this.newNumberIndex)
        console.log("El puntaje actual es: " + this.score)
    },

    DoTween(){
        //this.new_number = this.game.add.sprite(this.world.centerX+500, this.world.centerY,'numbers',  this.newNumberIndex);
        this.new_number = new Number(this.game,this.world.centerX+500,this.world.centerY,this.newNumberIndex);
        //this.new_number.anchor.setTo(0.5);

        this.currentNumber.DoTween(this.world.centerX-500,this.world.centerY)

        this.new_number.DoTween(this.world.centerX,this.world.centerY)

        /*
        this.tween = this.game.add.tween(this.currentNumber);
        this.tween.to({ x: [this.world.centerX-500], y: [this.world.centerY] }, 300, "Linear");
        this.tween.start();

        this.tween2 = this.game.add.tween(this.new_number);
        this.tween2.to({ x: [this.world.centerX], y: [this.world.centerY] }, 300, "Linear");
        this.tween2.start();
        */
    },
}