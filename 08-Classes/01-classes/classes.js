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
        super()
        this.name = name;
        this.color = color;

    }
    meow (){
        return 'meow';
    }
    
    haveBaby (color){
        let newBaby = new Mammal (`Baby ${this.name}`);
        this.offspring.push(newBaby);
        newBaby.color = color;

        return newBaby;
    }   
}


class Dog extends Mammal {
    constructor (name, breed){
        super()
        this.name = name;
        this.breed = breed;
    }

    bark (){
        return "RUFF RUFF"
    }

    haveBaby (breed){
        let newBaby = new Mammal (`Baby ${this.name}`)
        this.offspring.push (newBaby);
        newBaby.breed = breed;

        return newBaby;
    }
}

