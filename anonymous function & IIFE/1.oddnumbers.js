//Print odd numbers in an array

let number = [11,25,14,16,21,9,3,1,14,22,100,99,8,67,31];

(function(arr){
    let oddnumbers = arr.filter(function(num){
        return num % 2 == 1;
    });
    console.log("Odd Numbers:", oddnumbers);
})(number);