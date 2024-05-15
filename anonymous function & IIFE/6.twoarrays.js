let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    var findMedian = function(arr) {
        var mid = arr.length / 2;
        return (arr[mid - 1] + arr[mid]) / 2;
    };
    return findMedian(mergedArray);
})(array1, array2);
console.log(median);