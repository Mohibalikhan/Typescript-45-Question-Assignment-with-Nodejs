"use strict";
let personName = '';
personName = prompt('What is your Name?') || '';
let lowercase = personName.toLowerCase();
// Convert to uppercase
let uppercase = personName.toUpperCase();
// Convert to titlecase
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your name in:
lowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`);
}
else {
    alert('Please fill your Name !');
}
