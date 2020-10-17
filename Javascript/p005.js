/*
    Smallest multiple
    Problem 5
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const smallestMultiple = () => {
    let r = 2;
    while(true) {
        for(let i= 2; i <= 20;i++){
            if(r%i !== 0) {
                break;
            }
            if(i === 20) {
                return r;
            }
        }
        r++;
    }
}