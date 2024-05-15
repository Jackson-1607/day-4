const stringsArray = ["jackson", "quantum leap"];

const titleCapsArray = stringsArray.map(str =>
    str.toLowerCase().split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
);

console.log(titleCapsArray);