// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array
let magicianNames = ["Harry Potter", "Mr Bean", "Charle", "Einstien"];
function show_magicians(magicians) {
    magicians.forEach(magicianName => {
        console.log(magicianName);
    });
}
show_magicians(magicianNames);
export {};
