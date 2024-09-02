


interface Vechicle{
    name: string;
    age: number;
}


const sampleObj: Vechicle = {
    name: "Ashwin",
    age:20
}


type tuple = [string, number, boolean];

class A{
    name: string='first name';
    age: number=50;

    getName() {
        console.log("this is the get name method")
    }
}

class B extends A{

    getAge() {
        console.log("this is the get age from child class")
    }
}


const newObject = new B();

newObject.name = "Ashwin";
newObject.age = 20;

newObject.getName();
newObject.getAge();



let firstName: unknown = "something";

console.log(firstName as string)