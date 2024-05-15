const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const findPalindromes = arr => arr.filter(str => isPalindrome(str));

const words = ["radar", "hello", "level", "madam", "world"];
const palindromeWords = findPalindromes(words);

console.log(palindromeWords);