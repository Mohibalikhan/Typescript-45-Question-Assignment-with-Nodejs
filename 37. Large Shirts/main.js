"use strict";
// Modify the make_shirt() function so that shirts are large by default, with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
// size with a different message.
function make_shirt(size = "Large", text = "I love typeScript") {
    console.log(`Creating a "${size}" shirt with the message :"${text}"`);
}
make_shirt(); //print default values
make_shirt('Medium'); //print Medim size with the default massage
make_shirt('Small', 'I love  C++ programming'); //my decision size and my message
