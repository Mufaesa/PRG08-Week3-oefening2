class Jibby {

    public behavior: Behavior;

    public hygiene:number;
    public food:number;
    public happyness:number;

    public div:HTMLElement;
    public x:number;
    public y:number;
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);

        // start instellingen
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 20;

        // click listeners
        this.div.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());

        // hier het gedrag toekennen
        this.behavior = new Idle(this);
        
        // afbeelding voor idle - verplaatsen naar idle gedrag
        this.div.style.backgroundImage = "url('images/idle.png')";
    }

    public update():void {
        // hier het gedrag updaten
        this.behavior.performBehavior();
        
        // waarden verlagen per frame - dit moet in het gedrag staan

        // this.hygiene -= 0.01;
        // this.food -= 0.02;
        // this.happyness -= 0.015;
    }


    private onPet():void {
        this.behavior.onPet();
        // hier moet je de onPet functie van het gedrag aanroepen
    }

    private onWash():void {
        this.behavior.onWash();
        // hier moet je de onWash functie van het gedrag aanroepen
    }

    private onEat():void {
        // hier moet je de onEat functie van het gedrag aanroepen
        this.behavior.onEat();
    }


}
