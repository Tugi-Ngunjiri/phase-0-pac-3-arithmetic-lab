"before all ",hook in  '{root}'
`add(), 1 + 80;  81
'subtract()'60 - 40; 20
'multiply()'',2 * 3.4; 6.8'
'divide()'5.0 / 2.5;  2
add(a, b) adds two numbers and returns the result

let number = 5;

number++; 5 

number; 6

number; 6 
subtract(a, b) subtracts b from a and returns the result

number;  5
--number; 4

number; 4

++number; 5

number; 5
multiply(a, b) multiplies two numbers and returns the result

number += 3; 8

number -= 2; 6

number *= 10; 60

number /= 5;  12
divide(a, b) divides a by b and returns the result

//reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); 3.3333333333333335

add5(); 8.333333333333334
increment(n) increments n and returns the result

// reset number
number = 10;

add5(); 15

divideBy3();  5
decrement(n) decrements n and returns the result

parseInt("2", 10); 2
parses n as an integer and returns the parsed integer

parseInt("2.2222", 10);
assumes base 10
returns NaN as appropriate

parseInt("nonsense!", 10);
preserves n's decimals (it parses n as a floating point number) and returns the parsed number

parseFloat("80.123999"); , 80.123999 )
