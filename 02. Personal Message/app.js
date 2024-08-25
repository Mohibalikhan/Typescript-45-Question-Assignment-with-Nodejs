"use strict";
let personName = '';
personName = prompt('Your Name Please?') || '';
if (personName !== null && personName !== '') {
    alert(`Helloo ${personName},would you like to learn some phython today?`);
}
else {
    alert('You have not fill your name ! ');
}
