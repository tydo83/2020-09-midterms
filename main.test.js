const {
  isValidPassword, // tweaked to be harder
  onlyCs, // new
  countBs, // slightly tweaked
  deleteMiddleLetters, // same
  lastIndexOfPunctuation, // tweaked to be harder
  getCenturies,
} = require('./main.js')



describe('isValidPassword', () => {
  it(`returns false if there is a space in the given string`, () => {
    expect(isValidPassword('hey no this is not how it should be')).toBe(false);
    expect(isValidPassword('bad password')).toBe(false);
  })

  it(`returns false if the given string's length is less than 12 characters`, () => {
    expect(isValidPassword('shorty')).toBe(false);
    expect(isValidPassword('ritemoarpls')).toBe(false);
  })

  it(`returns false if the given string has a "." in it`, () => {
    expect(isValidPassword('colin.jaffe@codeimmersives.com')).toBe(false);
    expect(isValidPassword('Inconceivable.')).toBe(false);
  })

  it(`returns true otherwise`, () => {
    expect(isValidPassword('longpasswordwithnospacesorperiods')).toBe(true)
    expect(isValidPassword('justlongenuf')).toBe(true)
  })
})

describe('onlyCs', () => {
  it(`returns only the grades that are between 70 and 79 (inclusive) in the given array`, () => {
    const grades1 = [40, 73, 77, 100, 83, 93, 71, 76, 0];
    const grades2 = [50, 74, 77, 100, 96, 100];
    const justTheCs1 = [73, 77, 71, 76];
    const justTheCs2 = [74, 77];
    expect(onlyCs(grades1)).toEqual(justTheCs1)
    expect(onlyCs(grades2)).toEqual(justTheCs2)
  })

  it(`counts 70 and 79 as Cs, and not 80 or 69`, () => {
    const grades1 = [70, 50, 63, 77, 100, 83, 93, 81, 76, 69, 0];
    const grades2 = [79, 80, 106, 71, 100, 77, 110];
    const justTheCs1 = [70, 77, 76];
    const justTheCs2 = [79, 71, 77];
    expect(onlyCs(grades1)).toEqual(justTheCs1)
    expect(onlyCs(grades2)).toEqual(justTheCs2)
  })

  it(`does not modify the original array`, () => {
    const originalGrades1 = [30, 50, 70, 90];
    const originalGrades2 = [20, 80, 100, 102];
    const grades1 = [30, 50, 70, 90];
    const grades2 = [20, 80, 100, 102];
    onlyCs(grades1)
    onlyCs(grades2)
    expect(grades1).toEqual(originalGrades1)
    expect(grades2).toEqual(originalGrades2)
  })
})

describe('countBs', () => {
  it(`returns the number of grades that are between 80 and 89 (inclusive) in the given array`, () => {
    const grades1 = [50, 63, 87, 100, 83, 93, 81, 76, 0];
    const grades2 = [50, 81, 87, 100, 106, 110];
    expect(countBs(grades1)).toBe(3);
    expect(countBs(grades2)).toBe(2);
  })

  it(`counts 80 and 89 as Bs, and not 90 or 79`, () => {
    const grades1 = [90, 50, 63, 87, 100, 83, 93, 81, 76, 79, 0];
    const grades2 = [89, 80, 106, 81, 100, 87, 110];
    expect(countBs(grades1)).toBe(3);
    expect(countBs(grades2)).toBe(4);
  })

  it(`does not modify the original array`, () => {
    const originalGrades1 = [30, 50, 70, 90];
    const originalGrades2 = [20, 80, 100, 102];
    const grades1 = [30, 50, 70, 90];
    const grades2 = [20, 80, 100, 102];
    countBs(grades1)
    countBs(grades2)
    expect(grades1).toEqual(originalGrades1)
    expect(grades2).toEqual(originalGrades2)
  })
})

describe('deleteMiddleLetters', () => {
  it(`deletes the middle letter from a word, returning the resulting string`, () => {
    const str1 = 'hello';
    const result1 = 'helo';
    const str2 = 'goodbye';
    const result2 = 'goobye';
    expect(deleteMiddleLetters(str1)).toBe(result1);
    expect(deleteMiddleLetters(str2)).toBe(result2);
  })

  it(`deletes the middle two letters from a string with an even number of characters`, () => {
    const str1 = 'yessir';
    const result1 = 'yeir';
    const str2 = 'oh hello there';
    const result2 = 'oh hel there';
    expect(deleteMiddleLetters(str1)).toBe(result1);
    expect(deleteMiddleLetters(str2)).toBe(result2);
  })
})

describe('lastIndexOfPunctuation', () => {
  it(`returns the last index of a period`, () => {
    const str1 = `Oh yeah.`;
    const indexOfPunctuation1 = 7;
    const str2 = `I'm sorry. You're fired`;
    const indexOfPunctuation2 = 9;
    const str3 = `hey you. I'm talking to you. KEEP BEING AWESOME`;
    const indexOfPunctuation3 = 27;
    expect(lastIndexOfPunctuation(str1)).toBe(indexOfPunctuation1)
    expect(lastIndexOfPunctuation(str2)).toBe(indexOfPunctuation2)
    expect(lastIndexOfPunctuation(str3)).toBe(indexOfPunctuation3)
  })

  it(`returns the last index of a question mark`, () => {
    const str1 = `Oh yeah?`;
    const indexOfPunctuation1 = 7;
    const str2 = `I'm sorry, what did you say? You're fired`;
    const indexOfPunctuation2 = 27;
    const str3 = `You? I mean... you? WAT`;
    const indexOfPunctuation3 = 18;
    expect(lastIndexOfPunctuation(str1)).toBe(indexOfPunctuation1)
    expect(lastIndexOfPunctuation(str2)).toBe(indexOfPunctuation2)
    expect(lastIndexOfPunctuation(str3)).toBe(indexOfPunctuation3)
  })

  it(`returns the last index of an exclamation point`, () => {
    const str1 = `Oh yeah!`;
    const indexOfPunctuation1 = 7;
    const str2 = `No! I refuse`;
    const indexOfPunctuation2 = 2;
    const str3 = `You! I mean... you! Come on now`;
    const indexOfPunctuation3 = 18;
    expect(lastIndexOfPunctuation(str1)).toBe(indexOfPunctuation1)
    expect(lastIndexOfPunctuation(str2)).toBe(indexOfPunctuation2)
    expect(lastIndexOfPunctuation(str3)).toBe(indexOfPunctuation3)
  })

  it(`returns the last appearance of a period, question mark, or exclamation point`, () => {
    const str1 = `no. I do not!`;
    const indexOfPunctuation1 = 12;
    const str2 = 'hey. you! KEEP BEING AWESOME';
    const indexOfPunctuation2 = 8;
    const str3 = `what even? I can't do this. not today`;
    const indexOfPunctuation3 = 26;
    expect(lastIndexOfPunctuation(str1)).toBe(indexOfPunctuation1)
    expect(lastIndexOfPunctuation(str2)).toBe(indexOfPunctuation2)
    expect(lastIndexOfPunctuation(str3)).toBe(indexOfPunctuation3)
  })

  it(`returns -1 if there is no punctuation in the string`, () => {
    const noSpace1 = 'pizza pizza';
    const noSpace2 = 'I have no punc and I cannot lie';
    expect(lastIndexOfPunctuation(noSpace1)).toBe(-1)
    expect(lastIndexOfPunctuation(noSpace2)).toBe(-1)
  })
});

describe('getCenturies', () => {
  it(`returns century strings for the 11th-20th centuries`, () => {
    const years1 = [
      1483,
      1980,
      1635,
      1531,
      1776,
      1305,
    ]

    const centuries1 = [
      '15th',
      '20th',
      '17th',
      '16th',
      '18th',
      '14th',
    ]

    const years2 = [
      1888,
      1153,
      1299,
      1043,
    ]

    const centuries2 = [
      '19th',
      '12th',
      '13th',
      '11th',
    ]

    expect(getCenturies(years1)).toEqual(centuries1);
    expect(getCenturies(years2)).toEqual(centuries2);
  })

  it(`returns century strings for the 21st century`, () => {
    const years = [
      2001,
      2010,
      2020,
      2016,
      2080,
      2063,
    ]

    const centuries = [
      '21st',
      '21st',
      '21st',
      '21st',
      '21st',
      '21st',
    ]

    expect(getCenturies(years)).toEqual(centuries);
  })

  it(`returns century strings for the 4th-10th centuries`, () => {
    const years = [
      850,
      973,
      501,
      737,
      404,
      666,
      321,
    ]

    const centuries = [
      '9th',
      '10th',
      '6th',
      '8th',
      '5th',
      '7th',
      '4th',
    ]

    expect(getCenturies(years)).toEqual(centuries);
  })

  it(`returns century strings for the 1st-3rd centuries`, () => {
    const years = [
      1,
      5,
      9,
      23,
      63,
      99,
      105,
      220,
      280,
      350,
      376,
    ]

    const centuries = [
      '1st',
      '1st',
      '1st',
      '1st',
      '1st',
      '1st',
      '2nd',
      '3rd',
      '3rd',
      '4th',
      '4th',
    ]

    expect(getCenturies(years)).toEqual(centuries);
  })
})
