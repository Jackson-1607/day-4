let stringsArray = ["madam", "racecar", "hello", "world", "level", "test"];

let palindromes = (function(arr) {
    let isPalindrome = function(str) {
        let reversed = str.split('').reverse().join('');
        return str === reversed;
    };
    return arr.filter(isPalindrome);
})(stringsArray);
console.log(palindromes);