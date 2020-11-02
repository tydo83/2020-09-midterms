// Your code below.

const isValidPassword = function(password) {
  if(password.length < 12 || password.includes('.')
  || password.includes(' ')) return false;
  else {
    return true;
  }
}

const onlyCs = function(scores) {
  return scores.filter(function(scores){
    return scores >= 70 && scores <= 79
  });
}

const countBs = function(scores) {
  let count = 0;
  for(const score of scores) {
    if(score >= 80 && score <= 89)
    count++;
    }
  return count;
}

const lastIndexOfPunctuation = function(str) {
  for(const char of str) {
    if(char.includes('.') || char.includes('!') || char.includes('?')) {
      return str.lastIndexOf(char);
    } 
  }
  return -1;
}

test = lastIndexOfPunctuation(`You! I mean... you! Come on now`);
test;


const deleteMiddleLetters = function(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str.length % 2 == 0) {
      newStr = str.slice(0) + str.slice(1);
    }
    else {
      newStr += '';
    } 
  } 
  return newStr;
}

const getCenturies = function(years) {
  const centuries = [];
  for(const year of years) {
    if(year.toString().length <= 2) {
      centuries.push('1st');
    }
    if(year.toString().length > 2 && year.toString().length <= 3) {
      centuries.push(year + 100 > 2 ? (year + 100).toString().slice(0, 1) + 'th' :
      (year + 100).toString().slice(0, 1) + 'nd');
      }
    if(year.toString().length > 3 && year.toString().length <= 4) {
      centuries.push((year + 100).toString().slice(0, 2) + 'th');
    }
  }
  return centuries;
}

test = getCenturies([5, 63, 220, 501])
test;



// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
