import inquirer from "inquirer";
let age = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "Enter age:"
    }
]);
if (age.age < 2) {
    console.log("The Person is a baby");
}
else if (age.age >= 2 && age.age < 4) {
    console.log("The Person is a toddler");
}
else if (age.age >= 4 && age.age < 13) {
    console.log("The Person is a kid");
}
else if (age.age >= 13 && age.age < 20) {
    console.log("The Person is a teenager");
}
else if (age.age >= 20 && age.age < 65) {
    console.log("The Person is an adult");
}
else {
    console.log("The Person is an elder");
}
