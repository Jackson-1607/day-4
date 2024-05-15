var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 5];

var uniqueArray = (function(arr) {
    return [...new Set(arr)];
})(arrayWithDuplicates);
console.log(uniqueArray);
