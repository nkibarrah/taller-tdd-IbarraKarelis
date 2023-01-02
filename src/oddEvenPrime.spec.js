import { isPrime, isOddEven, OddEvenPrime } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('Should return Odd when the number is Odd', () => {
    const num = 27;
    const exp = "Odd"
    const resp = OddEvenPrime(num);
    expect(resp).toEqual(exp)
  });

  test('Should return Even when the number is Even', () => {
    const num = 12;
    const exp = "Even"
    const resp = OddEvenPrime(num);
    expect(resp).toEqual(exp)
  });

  test('Should return number string when the number is prime', () => {
    const num = 2;
    const exp = num.toString()
    const resp = OddEvenPrime(num);
    expect(resp).toEqual(exp)
  });
});
