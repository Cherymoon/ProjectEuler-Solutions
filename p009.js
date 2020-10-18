/*
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
                                             a^@ + b^2 = c^2
    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/

const pythagoreanTriplet = (num) => { // In this case, num should be 1000;
    for (let a = 0; a <= num; a++) {
      for (let b = 0; b <= num; b++) {
        for (let c = 0; c <= num; c++) {
          if (a + b + c === num) {
            if (a * a + b * b === c * c && a < b && b < c) {
              return a*b*c;
            }
          }
        }
      }
    }
  };

  console.log(pythagoreanTriplet(1000));