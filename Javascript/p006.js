/*
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
    What is the 10 001st prime number?
*/

const stPrime = (num) => {  // Just call this function with 10001 as parameter
    let count = 0;
    for(let i=2; i< Number.MAX_SAFE_INTEGER; i++) {
        if(isPrime(i)) {
            count ++
        }
        if(count === num) {
            return i;
        }
    }
}

const isPrime = (num) => {
    let r = 2;
    if (num == 2) {
        return true;
    }
    if(num%2===0) {
        return false;
    }
    for (let i = 3; i <= Math.ceil(Math.sqrt(num)); i += 2) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}