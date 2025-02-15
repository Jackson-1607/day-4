const isPrime = num => {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

const findPrimes = arr => arr.filter(num => isPrime(num));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimes(numbers);

console.log(primeNumbers);