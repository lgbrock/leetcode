/*
// Two Sum
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};
*/

// Reverse Integer
const reverse = (x) => {
	const maxValue = Math.pow(2, 31) - 1;
	const result =
		(x > 0 ? 1 : -1) * Math.abs(x).toString().split('').reverse().join('');
	return result < -maxValue || result > maxValue ? 0 : parseInt(result);
};
console.log(reverse(746));

// Palindrome Number
const isPalindrome = (x) =>
	x.toString().split('').reverse().join('') === x.toString();

// Reverse String
const reverseString = (s) => s.reverse();

// First Unique Character in a String
const firstUniqChar = (s) => {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
	}

	return -1;
};

// Valid Anagram
const isAnagram = (s, t) =>
	t.toLowerCase().split('').sort().join('') ===
	s.toLowerCase().split('').sort().join('');

// Fizz Buzz
const fizzBuzz = (n, arr = []) => {
	if (n % 3 === 0 && n % 5 === 0) arr.push('FizzBuzz');
	else if (n % 3 === 0) arr.push('Fizz');
	else if (n % 5 === 0) arr.push('Buzz');
	else arr.push(n.toString());
	return n > 1 ? fizzBuzz((n -= 1), arr) : arr.reverse();
};

// Contains Duplicate
const containsDuplicate = (nums) => nums.length !== [...new Set(nums)].length;

// Move Zeroes
const moveZeroes = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
			i--;
			length--;
		}
	}
	return nums;
};

// Plus One
const plusOne = (digits) => {
	let carry = 1;
	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i] = digits[i] + carry;
		digits[i] =
			digits[i] >= 10
				? ((carry = 1), digits[i] - 10)
				: ((carry = 0), digits[i]);
	}
	if (carry) {
		digits.unshift(1);
	}
	return digits;
};
