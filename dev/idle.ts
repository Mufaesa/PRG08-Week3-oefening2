class Idle implements Behavior {

    jibby:Jibby;

    
    constructor(j:Jibby){

        this.jibby = j;

    }

    performBehavior(){
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        console.log("status updating")

        if(this.jibby.food < 0|| this.jibby.hygiene < 0 || this.jibby.happyness < 0){
            console.log("jibby died")
            this.jibby.behavior = new Dead(this.jibby);
        }
        
        if(this.jibby.food > 25 && this.jibby.hygiene > 25 && this.jibby.happyness >25){
            this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        }else if(this.jibby.food < 5){
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        } else if(this.jibby.happyness < 5){
            this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        } else if(this.jibby.hygiene < 5){
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        }


    }

    onEat(){
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
        this.jibby.food += 10;
        console.log('food +10');
    }
    onWash(){
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        this.jibby.hygiene += 10;
        console.log("hygiene +10");
        
    }
    onPet(){
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        this.jibby.happyness += 10;
        console.log("happyness +10");
    }

    

}