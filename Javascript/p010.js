/*
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million.
*/

const sumOfPrimesBelow = (num) => {
  let sum = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

// Check a certain number is prime
const isPrime = (num) => {
  if (num == 2) {
    return true;
  }
  if (num % 2 == 0) {
    return false;
  }
  for (let i = 3; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(sumOfPrimesBelow(2000000))
// Result: 142913828922
