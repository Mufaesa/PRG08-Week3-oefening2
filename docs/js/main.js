var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
    }
    Dead.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Dead.prototype.onEat = function () {
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onPet = function () {
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(j) {
        this.jibby = j;
    }
    Eating.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Eating.prototype.onEat = function () {
    };
    Eating.prototype.onWash = function () {
    };
    Eating.prototype.onPet = function () {
    };
    return Eating;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 20;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behavior = new Idle(this);
        this.div.style.backgroundImage = "url('images/idle.png')";
    }
    Jibby.prototype.update = function () {
        this.behavior.performBehavior();
    };
    Jibby.prototype.onPet = function () {
        this.behavior.onPet();
    };
    Jibby.prototype.onWash = function () {
        this.behavior.onWash();
    };
    Jibby.prototype.onEat = function () {
        this.behavior.onEat();
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Happy = (function () {
    function Happy(j) {
        this.jibby = j;
    }
    Happy.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Happy.prototype.onEat = function () {
    };
    Happy.prototype.onWash = function () {
    };
    Happy.prototype.onPet = function () {
    };
    return Happy;
}());
var Idle = (function () {
    function Idle(j) {
        this.timer = 0;
        this.jibby = j;
    }
    Idle.prototype.performBehavior = function () {
        this.jibby.hygiene -= 0.01;
        this.jibby.food -= 0.02;
        this.jibby.happyness -= 0.015;
        this.timer++;
        console.log("status updating");
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behavior = new Dead(this.jibby);
        }
        if (this.timer >= 300) {
        }
        if (this.jibby.food > 25 && this.jibby.hygiene > 25 && this.jibby.happyness > 25) {
            this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        }
        else if (this.jibby.food < 5) {
            this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
        }
        else if (this.jibby.happyness < 5) {
            this.jibby.div.style.backgroundImage = "url('images/sad.png')";
        }
        else if (this.jibby.hygiene < 5) {
            this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
        }
    };
    Idle.prototype.onEat = function () {
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
        this.jibby.food += 10;
        console.log('food +10');
    };
    Idle.prototype.onWash = function () {
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
        this.jibby.hygiene += 10;
        console.log("hygiene +10");
    };
    Idle.prototype.onPet = function () {
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
        this.jibby.happyness += 10;
        console.log("happyness +10");
    };
    return Idle;
}());
var Washing = (function () {
    function Washing(j) {
        this.jibby = j;
    }
    Washing.prototype.performBehavior = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Washing.prototype.onEat = function () {
    };
    Washing.prototype.onWash = function () {
    };
    Washing.prototype.onPet = function () {
    };
    return Washing;
}());
//# sourceMappingURL=main.js.map