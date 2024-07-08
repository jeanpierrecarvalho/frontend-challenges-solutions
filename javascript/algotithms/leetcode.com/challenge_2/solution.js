/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  return x.toString() === x.toString().split('').reverse().join('')
}

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeNoString = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let reversed = 0
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return x === reversed || x === Math.floor(reversed / 10)
}

// Test cases

// Example 1
let x1 = 121
console.log(isPalindrome(x1)) // Output: true

// Example 2
let x2 = -121
console.log(isPalindrome(x2)) // Output: false

// Example 3
let x3 = 10
console.log(isPalindrome(x3)) // Output: false
