class Eating implements Behavior {

    jibby:Jibby;
    
    constructor(j: Jibby){
        this.jibby = j;
    }

    performBehavior(){
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    }

    onEat(){

    }
    onWash(){

    }
    onPet(){
        
    }

}