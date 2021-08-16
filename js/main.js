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

// Power of Three
const isPowerOfThree = (n) => {
	if (n === 0) return false;
	return n === 1 || (n % 3 === 0 && isPowerOfThree(n / 3));
}

const isPowerOfThree = (n) => (Math.log(n) / Math.log(3)).toFixed(10) % 1 === 0

// Roman to Integer
const romanToInt = (s) => {
	const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		if (i > 0 && roman[s[i]] > roman[s[i - 1]]) result += roman[s[i]] - 2 * roman[s[i - 1]];
		else result += roman[s[i]];
	}
	return result;
}


// Best Time to Buy and Sell Stock II
const maxProfit = (prices) => {
	let max = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - prices[i - 1] > 0) max += prices[i] - prices[i - 1];
	}
	return max;
};


// Count Primes
const countPrimes = (n) => {
	let isPrime = Array(n).fill(true, 2);
	let count = 0;

	for (let i = 2; i < n; i++) {
		if (isPrime[i]) {
			count++;
			for (let j = i * i; j < n; j += i) {
				isPrime[j] = false;
			}
		}
		return count;
	}
};

// First Bad Version
const solution = (isBadVersion) => {
	return function (n) {
		let low = 1,
			high = n;
		while (low < high) {
			let mid = low + Math.floor((high - low) / 2);
			if (isBadVersion(mid)) {
				high = mid;
			} else {
				low = mid + 1;
			}
		}
		return low;
	};
};
*/

// Implement strStr()
const strStr = (haystack, needle) => {
	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
		let found = true;
		for (let j = 0; j < needle.length; j++) {
			if (haystack[i + j] !== needle[j]) {
				found = false;
				break;
			}
		}
		if (found) return i;
	}
	return -1;
};

// Valid Parentheses
const isValid = (s) => {
	while (/(\[\])|(\(\))|({})/.test(s)) {
		s = s.replace(/(\[\])|(\(\))|({})/g, '');
	}
	return !s.length;
};

// Single Number
const singleNumber = (nums) => {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result ^= nums[i];
	}
	return result;
}