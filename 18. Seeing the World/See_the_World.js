var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//-->List of places i wish to visit 
var places = ["Makkah", "Madina", "Germany", "Alaska", "London"];
//1.Original order
console.log("Original order:", places);
//2.Alphabetical order without modifying the original list
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//...-->means places ki copy bangae ha ab ham is copy ke sth kuch bhi karen
//3. Show that the original order is still intact
console.log("Original order after sorting:", places);
//4. Print reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
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
