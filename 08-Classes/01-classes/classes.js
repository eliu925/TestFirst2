/* eslint-disable no-unused-vars */
class Mammal {
    constructor (name){
        this.name = name;
        this.offspring = [];

    }
    sayHello (){
        return `My name is ${this.name}, I'm a ${this.constructor.name}`
    }

    haveBaby(){
       let newChild = new Mammal (`Baby ${this.name}`);
        this.offspring.push(newChild);
        return newChild;
    }
}

class Cat extends Mammal{
    constructor (name,color){
        super(name)
   
        this.color = color;

    }
    meow (){
        return 'meow';
    }
    
    haveBaby (color){
        let newBaby = new Mammal (`Baby ${this.name}`, color);
        this.offspring.push(newBaby);
     

        return newBaby;
    }   
}


class Dog extends Mammal {
    constructor (name, breed){
        super()

        this.breed = breed;
    }

    bark (){
        return "RUFF RUFF"
    }

    haveBaby (breed){
        let newBaby = new Mammal (`Baby ${this.name}`, breed)
        this.offspring.push (newBaby);
  

        return newBaby;
    }
}

