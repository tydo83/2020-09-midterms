# 2020-09 Term 1 Midterm Exam



### isValidPassword

##### Summary

Returns true if there are no spaces or periods in the given string and the string is at least 12 characters long. Returns false otherwise.

##### Examples

``` javascript
isValidPassword('hey no this is not how it should be') // -> false
isValidPassword('bad password') // -> false
isValidPassword('colin.jaffe@codeimmersives.com') // -> false
isValidPassword('Inconceivable.') // -> false
isValidPassword('shorty') // -> false
isValidPassword('ritemoarpls') // -> false
isValidPassword('longpasswordwithnospacesorperiods') // -> true
isValidPassword('justlongenuf') // -> true`
```

##### Hints

Try using `.includes` instead of a loop.


### onlyCs

##### Summary

Returns only the grades that are Cs (between 70 and 79 inclusive) in the given array.


##### Examples

``` javascript
onlyCs([40, 73, 77, 100, 70, 79, 83, 93, 71, 76, 0])
// -> [73, 77, 70, 79, 71, 76]
```


##### Hints

* This is a filter operation, taking many values and returning a collection of values that met a criterion for inclusion.
* You can filter with a named helper function, an anonymous helper function, an anonymous arrow helper function... or a manual loop. Just solve the problem!


### countBs

##### Summary

Returns a count of how many grades in the given array were Bs (from 80 to 89 inclusive).


##### Examples

``` javascript
countBs([90, 50, 63, 87, 100, 83, 93, 81, 76, 79, 0]);
// -> 3
countBs([89, 80, 106, 81, 100, 87, 110]);
// -> 4
```


##### Hints

* This is a reduce operation, taking many values and giving back one.
* You can complete it using `.reduce`, but it's almost as clean with a simple for loop!
* Don't forget to update how many Bs you've seen so far, and don't `return` until you have a full answer.


### lastIndexOfPunctuation

##### Summary

Returns the *last* appearance of a period, question mark, or exclamation point in the given string. Returns `-1` if none is found.


##### Examples

``` javascript
lastIndexOfPunctuation(`no. I do not!`) //-> 12
lastIndexOfPunctuation(`what even? I can't do this. not today`) //-> 26
lastIndexOfPunctuation(`I have no punc and I cannot lie`) //-> -1
```


##### Hints

* This is solvable with a loop, either forwards or backwards.
* An alternative tactic uses a built-in JavaScript method on strings that's like `.indexOf`... You'll have to do a bit of research if you want to try that method.
* No matter what tactic you take, you'll want to make sure you're getting the number representing the LAST index those punctuation marks hold. If you end up with multiple numbers, you can compare them. Or if you're only keeping track of one number and updating as you go, that works too!
* You'll also want to think about how to make sure you're returning `-1` if and only if you never find any punctuation.


### deleteMiddleLetters

##### Summary

Deletes the middle letter from the given string, returning the resulting string. If given a string with an even number of characters, removes the middle two characters.


##### Examples

``` javascript
deleteMiddleLetters('hello'); //-> 'helo'
deleteMiddleLetters('goodbye'); //-> 'goobye'
deleteMiddleLetters('four'); //-> 'fr'
deleteMiddleLetters('yessir'); //-> 'yeir'
```


##### Hints

* Any middle element will have a (relatively) simple mathematical relationship to the length of the collection (in this case, a string).
* Loops and ifs and string-building can do this for you, but I recommend using `.slice`. Make sure you read the docs on it if you go that route; which index you start and end on can be initially confusing!
* Either way, pay attention to what indices you want and which ones you don't.
* Pay attention as well to working with strings with an even count of characters. There will still be a relationship between each of them and the `.length` of the string.


### getCenturies

##### Summary

Given a collection of numbers representing years, gives back a collection of strings representing the century those years are in.


##### Examples

``` javascript
getCenturies([1483, 1980, 1635, 1531, 1776, 1305]);
// -> ['15th', '20th', '17th', '16th', '18th', '14th']
getCenturies([5, 63, 220, 501]);
// -> ['1st', '1st', '3rd', '6th']
```

##### Hints

* This is a mapping operation, taking a collection of elements and returning a collection where each element has been transformed in some way.
* As such, you can do this manually with a loop or use `.map` with whatever level of abstraction you prefer (from named helper function to arrow function).
* Remember that you're going to take in a collection of numbers and give back a collection of strings. The `.toString` method on numbers can help with that.
* Once you're dealing with a string, `.slice` can help you only include the parts of the year you care about. `2001` is in the same century as `2099`; the last two digits don't matter.
* **Don't forget that the centuries are off by one** from where we sometimes think they are. We're in the 21st century, NOT the 20th, despite our years starting with 20. This is a case where you can see the perils of 1-based counting in everyday life; we started counting the first century from years 1-100, and we've been confused since.
* Technically, because of the off-by-one issue mentioned above, centuries don't end until 1 after what we think (the 21st century started in 2001, not 2000), but a) [Sir, this is an Arby's](https://knowyourmeme.com/memes/sir-this-is-an-arbys) and b) we're **not** going to test you for that edge case.
