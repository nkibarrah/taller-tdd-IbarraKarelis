/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 3

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

const CalculateSum = string => {
  var count = 0
  var sum = 0
  var a = myNumber(string, count)
  for (let i = count; count < string.length; i++) {
    a = myNumber(string, count)
    if (a.length > 0) {
      sum += parseInt(a)
    }
    count += a.length + 1
  }
  return sum
}

const myNumber = (string, index) => {
  var pattern = "^[0-9]+$";
  var n = ""
  for (let i = index; i < string.length; i++) {
    if (string[i].match(pattern) != null) {
      n += string[i]
    }
    else {
      break
    }
  }
  return n
}

export { CalculateSum, myNumber };