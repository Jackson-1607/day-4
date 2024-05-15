let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
    
    let isPrime = function(num) {
        if (num <= 1) return false; 
        if (num <= 3) return true; 
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (var i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };

    return arr.filter(isPrime);
})(numbersArray);

console.log(primeNumbers);
