// Define an array of strings
let stringsArray = ["jedidiah jackson", "music producer", "only good vibes"];

// Use an IIFE and map function to convert strings to title caps
let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
})(stringsArray);
console.log(titleCapsArray);
