//-->List of places i wish to visit 
let places: string[] = ["Makkah", "Madina", "Germany", "Alaska", "London"];

//1.Original order
console.log("Original order:", places);

//2.Alphabetical order without modifying the original list
console.log("Alphabetical order:", [...places].sort());
//...-->means places ki copy bangae ha ab ham is copy ke sth kuch bhi karen

//3. Show that the original order is still intact
console.log("Original order after sorting:", places);

//4. Print reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());

//5. Show that the original order is still intact
console.log("Original order after reverse sorting:", places);

//6. Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);

//7. Reverse the order of the list again to get back to the original order
places.reverse();
console.log("Original order after double reversing:", places);

//8. Sort the array in alphabetical order
places.sort();
console.log("Sorted in alphabetical order:", places);

//9. Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Sorted in reverse alphabetical order:", places);
