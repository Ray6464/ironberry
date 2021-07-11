// write a method to get leading spaces

function mod(num, modLimit) { // Translate a number to modular form of *Mod*
  const revolutions = Math.floor(num / modLimit);
  const numMod = num - (modLimit*revolutions);
  return numMod;
}

function binOperateOnMod(num1, num2, modLimit, mathOp) { // Performs the given binary math operation to a couple of modular numbers
  const firstNum = (num1 < modLimit ? num1 : mod(num1, modLimit));
  const secondNum = (num2 < modLimit ? num2 : mod(num2, modLimit));
  return mathOp(firstNum, secondNum);
}

function addMod(num1, num2, modLimit) { // Add molular numbers
  return binOperateOnMod(num1, num2, modLimit, (arg1, arg2) => arg1 + arg2);
}

function subMod(num1, num2, modLimit) { // Subtract modular numbers
  return binOperateOnMod(num1, num2, modLimit, (arg1, arg2) => arg1 - arg2);
}

function timesMod(num1, num2, modLimit) { // multiply modular numbers
  const multiple = binOperateOnMod(num1, num2, modLimit, (arg1, arg2) => arg1 * arg2);
  return mod(multiple, modLimit);
}

function removeDuplicateChars(str) {
  let nonDupStr = [];
  for (let chara of str.split('')) {
    if (!nonDupStr.includes(chara)) nonDupStr.push(chara);
  }
  return nonDupStr.join('');
}

function capitalizeFirstChar(word) {
  const newWord = word.split('').map((alphabet, index) => (index>0? alphabet.toLowerCase(): alphabet.toUpperCase())).join('');
  return newWord;
}

const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
const alphabets1 = upperCaseAlphabets + lowerCaseAlphabets;
const alphabets2 = lowerCaseAlphabets + upperCaseAlphabets;
const decimalDigits = "0123456789";
const hexDigits = "0123456789ABCDEF";

function charaToNum1(chara) {
  return alphabets1.indexOf(chara);
}

function charaToNum2(chara) {
  return alphabets2.indexOf(chara);
}

function rangeOfChara(chara, range) {
  let str = "";
  for (let i = 0; i < range; i++) { str += chara }
  return str;
}

/*
function subData(str, pass, logicalOp) { // convert a string to another string of same size using index based substitution e.g. "Hello Wolrd" to "kepajtwocuralx" 
  return passphrase;
  //return str.map((x,i) => pass[i]);
}
*/

// Add more functions to this
module.exports = {
  modular: {
    mod: mod,
    binOperateOnMod: binOperateOnMod,
    addMod: addMod,
    subMod: subMod,
    timesMod: timesMod,
  },
  string: {
    removeDuplicateChars: removeDuplicateChars,
    charaToNum1: charaToNum1,
    charaToNum2: charaToNum2,
    rangeOfChara: rangeOfChara,
    capitalizeFirstChar: capitalizeFirstChar,
    uppperAlphabets: upperCaseAlphabets,
    lowerAlphabets: lowerCaseAlphabets,
    alphabets1: alphabets1,
    alphabets2: alphabets2,
    decimalDigits: decimalDigits,
    hexDigits: hexDigits,
    //subData: subData,
  },
  getLeadingZeros: function (totalShardCount, partNumber) {
    let shardPrefix;
      // make it bigger, it needs to support infinite numbers (ideally)
      // Rename variables so it gets detached from slice-net
      if (totalShardCount >= 100) {
        if (partNumber >= 100) {
	  shardPrefix = "";
        } else if (partNumber >= 10) {
	  shardPrefix = "0";
        } else if (partNumber >= 1) {
	  shardPrefix = "00";
        }
      } else if (totalShardCount >=10) {
        if (partNumber >= 10) {
	  shardPrefix = "";
        } else if (partNumber >= 1) {
	  shardPrefix = "0";
        }
      } else if (totalShardCount >= 1) {
          shardPrefix = "";
      } else {
        hardLog("IronBerry Error: shard length not valid, or too many shards");
        process.exit();
      }
  return shardPrefix;
  }
}

