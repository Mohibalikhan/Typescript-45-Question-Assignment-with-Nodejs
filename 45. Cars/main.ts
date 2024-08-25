// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer: string, model: string, ...extras:{ [key:string] :any } [] ){
    const carInfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extras)
    }
    return carInfo;
}
let car = createCar('Honda', 'Civic', {color:'black'}, {features:['navigation', 'sunroof']});
let car2= createCar('Toyota', 'Camry', {year:2022}, {color:'white', features:['leather', 'sunroof']});
console.log(car);
console.log(car2);
