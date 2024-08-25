//write a program that creates objects containing these items.
//object store data in the form of key value pairs
//Interface object ko ak specific data type deta ha

interface person {
    Name:string,
    Age:number
    Nationality:string,
    Gender:string
}

let Person:person  = {
    Name :"Mohib",
    Age:21,
    Gender:"Male",
    Nationality:"Pakistan"
}
console.log(Person);


//In this we create a Bike interface and object

interface bike {
    Maker:string,
    Model:number,
    Color:string
}

let Bike:bike ={
    Maker:"Honda",
    Model:2024,
    Color:"Black"
}
console.log(Bike);



