// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames:string[]=['admin','user1','user2','user3','user4'];
console.log(usernames);
if (usernames.length===0){
    console.log("We need to find some users!");
}
else{
    usernames=[];
    console.log("All usernames have been removed. "+usernames.length);
}

