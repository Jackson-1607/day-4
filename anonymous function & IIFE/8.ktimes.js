var array = [1, 2, 3, 4, 5];
var k = 2;
var rotatedArray = (function(arr, k) {
    k = k % arr.length;

    var rotate = function(arr) {
        return arr.slice(-k).concat(arr.slice(0, -k));
    };
    return rotate(arr);
})(array, k);
console.log(rotatedArray);
