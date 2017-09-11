//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color) {
    this.status = "normal";
    this.color = color;
    this.hungry = true;
    this.owner = undefined;
}

const sadie = new Dog("black");
const moonshine = new Dog();
const atticus = new Dog();

sadie.hungry = false;
    
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
    this.cool = cool;
    this.pet = function (dog){
        dog.status = "happy";
    }
    this.feed = function (dog){
        dog.hungry = false;
    }
}



const mason = new Human(false);
const julia = new Human(true);
// Instances of Human
// Needed: mason, julia
