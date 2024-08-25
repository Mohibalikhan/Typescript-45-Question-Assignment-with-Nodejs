// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again

let username:string[]=["Admin","Sami","Rehman","Ashan","Waqar"];
console.log(username);
for(let i=0;i<username.length;i++){
    if(username[i]=="Admin"){
        console.log("Hello Admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${username[i]}, thank you for logging in again.`);
    }
}
