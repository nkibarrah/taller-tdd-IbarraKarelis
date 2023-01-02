import { CalculateSum, myNumber } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should return 4 to add the string h3ll0w0rld1', () => {
    const string = 'h3ll0w0rld1';
    const exp = 4
    const resp = CalculateSum(string);
    expect(resp).toEqual(exp);
  });

  test('should return 3635 to add the string The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog', () => {
    const string = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
    const exp = 3635
    const resp = CalculateSum(string);
    expect(resp).toEqual(exp);
  });

});
