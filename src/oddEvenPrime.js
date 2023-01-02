/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number.
If number is even print 'Even' instead of number.
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */


const OddEvenPrime = (num) => {
  if (isPrime(num)) {
    return num.toString()
  }
  else {
    if (isOddEven(num)) {
      return "Even"
    }
    else {
      return "Odd"
    }
  }
}


// Return True if number is Even else if number is Odd this method return False
const isOddEven = (num) => num % 2 === 0;

// This method validate if a number is prime or no
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(OddEvenPrime(9))

export { isPrime, isOddEven, OddEvenPrime };