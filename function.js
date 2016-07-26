'use strict'

/*
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (a, b) => {
  return a + b
}

// sum(24, 6)

console.assert(sum(8, 11) === 19)
console.assert(sum(4, 100) === 104)

/*
 * Write a function that calculates the sum of all the numbers in an array
 */

const sumOfArray = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
  }
  return sum
}

console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)



/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 * Hint: You can access the indivdual characters
 * of a string like an array: `str[0]`
 */

const reverse = (str) => {
  let rev = ""
  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
  }
  return rev
}

console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/*
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 * Hint: Strings have a function called: `split()`, look it up on MDN
 */

const findLongestWord = (sentence) => {
  let longest_word = '';

  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++)
  {
    let word = words[i];

    if (word.length > longest_word.length)
    {
      longest_word = word;
    }
  }

  return longest_word;
}

console.assert(findLongestWord('book dogs') === 'book')
console.assert(findLongestWord("dont mess with Texas") === 'Texas')
