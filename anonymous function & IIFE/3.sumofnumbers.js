let numbersArray = [1, 2, 3, 4, 5];

let sum = (function(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
})(numbersArray);

console.log(sum);
