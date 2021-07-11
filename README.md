# ironberry
A javascript library to work with numbers, strings, and other data, mostly to aid in the development of calculators and similar programs. This library is basically a dump of exotic mathematical functions and algorithms.

More methods will be added from time to time. You are free to make a PR, my dump is your dump.

# Installation
To install IronBerry use the following command:
```
npm i ironberry --save
```

# Usage
Ironberry has a large code base, compraised of several methods. Following is a Guide:

## Get Leading Zeros
Get a "prefix" of leading zeros depending upon the largest number you have:
```javascript
const ironberry = require('ironberry');

ironberry.getLeadingZeros(100, 3); // returns "00" hence "003"
ironberry.getLeadingZeros(365, 1); // returns "00" hence "001"
ironberry.getLeadingZeros(10, 1); // returns "0" hence "01"
ironberry.getLeadingZeros(20, 11); // returns "" hence ""
```
In each case the leadingZeros+the2ndArgument has the same amount of digits as the 1st argument.

Digits over 999 aren't supported yet. Make a PR!

## Mod
The `mod(number, modLimit)` method converts `number` to modular form.
```javascript
const {mod} = require('ironberry');
mod(6, 5); // returns 1
mod(7, 5); // returns 2
mod(10, 5); // returns 0
mod(5, 5); // returns 0
```

## Perform a binary operation on modular numbers
To perform a binary operation on two modular numbers using `binOperateOnMod(num1, num2, modLimit, mathOpCallback)`observe the following example:
```javascript
// To add to modular numbers
binOperateOnMod(num1, num2, modLimit, (arg1, arg2) => arg1 + arg2);
```
Both numbers must be of the same modular system, and these numbers can be represented in decimal system as long as the `modLimit` is given.

## Modular Math Operations
Import these methods and props like this:
```javascript
const {addMod} = require('ironberry').modular;
```
List:
1. `addMod(num1, num2, modLimit)`: To add two modular numbers.
2. `subMod(num1, num2, modLimit)`: To subtract `num2` from `num1`.
3. `timesMod(num1, num2, modLimit)`: To multiply two modular numbers.

## Exotic String Props and Methods
Import these methods and props like this:
```javascript
const {removeDuplicateChars} = require('ironberry').string;
```
List:
1. `removeDuplicateChars(str)`: To remove duplicate characters from a string after their first instance. For example:- `Hello` becomes `Helo`.
2. `capitalizeFirstChar(word)`: To capitalize the first character of a word and make the rest small. For example:- `hello` becomes `Hello`.
3. `upperCaseAlphabets`: Returns a string of all upper case English Alphabets. 
4. `lowerCaseAlphabets`: Returns a string of all lower case English Alphabets. 
5. `alphabets1`: Returns a string of all English Alphabets from Capitals to Smalls. 
6. `alphabets2`: Returns a string of all English Alphabets from Smalls to Capitals. 
7. `decimalDigits`: Returns a string of all decimal digits.
8. `hexDigits`: Returns a string of all hexadecimal digits.
9. `charaToNum1(chara)`: Returns the index of an English alphabet `chara` from `alphabets1`.
10. `charaToNum2(chara)`: Returns the index of an English alphabet `chara` from `alphabets2`.
11. `rangeOfChara(chara, range)`: Returns a string with the `chara` string repeating the `range` number of times. Usually used to generate whitespace, leading characters, boilerplate sentences, etc.

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

