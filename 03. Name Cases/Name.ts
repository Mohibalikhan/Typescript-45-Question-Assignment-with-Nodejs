let personName: string = '';

personName = prompt('What is your Name?') || '';

let lowercase: string = personName.toLowerCase();

// Convert to uppercase
let uppercase: string = personName.toUpperCase();

// Convert to titlecase
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !==null && personName !== ''){
    alert(`Hello ${personName}, Here are your name in:
lowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`)
}
else{
    alert('Please fill your Name !')

}