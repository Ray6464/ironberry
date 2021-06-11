# ironberry
A javascript library to work with numbers, mostly to aid in the development of calculators and similar methods. This library is basically a dump of exotic mathematical functions that I encounter that have nowhere else to go.

More methods will be added from time to time. You are free to make a PR.

#Installation
To install IronBerry use the following command:
```
npm i ironberry --save
```

#Usage
Get a "prefix" of leading zeros depending upon the largest number you have:
```
const ironberry = require('ironberry');

ironberry.getLeadingZeros(100, 3); // returns "00" hence "003"
ironberry.getLeadingZeros(365, 1); // returns "00" hence "001"
ironberry.getLeadingZeros(10, 1); // returns "0" hence "01"
ironberry.getLeadingZeros(20, 11); // returns "" hence ""
```
In each case the leadingZeros+the2ndArgument has the same amount of digits as the 1st argument.

Digits over 999 aren't supported yet. Make a PR!
