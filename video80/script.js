let animal = {
    eats:true
}
let rabbit = {
    jumps:true
}
console.log(animal);
console.log(rabbit);

rabbit.__proto__ = animal;

class Animal
{
    constructor(name){
        console.log("Object is created !!");
        this.name = name;
    }

    eats(){
        console.log("Kha raha hoon !!");
    }
    jumps(){
        console.log("Kood raha hoon");
    }
}
let a1 = new Animal("Bunny");
a1.eats();
a1.jumps(); 
// a1.run();
console.log(a1.name)

class Lion extends Animal
{
    constructor(name){
        super(name);
        console.log("Object is created and he is a lion");
    }
    eats(){
        super.eats();
        console.log("Kha raha hoon roar !!");
    }
    roar(){
        console.log("Roaring !!");
    }
    
}
let l1 = new Lion("Shera");
l1.eats();
l1.jumps()
console.log(l1)
l1.roar();

console.log(l1 instanceof Lion)

console.log(l1 instanceof Animal)
