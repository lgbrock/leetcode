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
};

// Count and Say
const countAndSay = (n) => {
	if (n === 1) return '1';
	let s = countAndSay(n - 1);
	let count = 1;
	let result = '';
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			count++;
		} else {
			result += count + s[i - 1];
			count = 1;
		}
	}
	result += count + s[s.length - 1];
	return result;
};

// Longest Common Prefix
const longestCommonPrefix = (strs) => {
	if (!strs.length) return '';
	let min = strs[0].length;
	for (let i = 1; i < strs.length; i++) {
		let j = 0;
		while (j < min && strs[i][j] === strs[0][j]) j++;
		min = Math.min(min, j);
	}
	return strs[0].substr(0, min);
};

// Max Consecutive Ones
const findMaxConsecutiveOnes = (nums) => {
	let max = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++;
		} else {
			max = Math.max(max, count);
			count = 0;
		}
	}
	return Math.max(max, count);
};

// Find Numbers with Even Number of Digits
const findNumbers = (n) => {
	let count = 0;
	for (let i = 0; i < n.length; i++) {
		if (String(n[i]).length % 2 === 0) count++;
	}
	return count;
};

// Squares of a Sorted Array
const sortedSquares = (nums) => {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		result.push(nums[i] * nums[i]);
	}
	return result.sort((a, b) => a - b);
};

// Duplicate Zeros
const duplicateZeros = (arr) => {
	let temp = [];
	for (let elem of arr) {
		if (elem === 0) {
			temp.push(0);
			temp.push(0);
		} else {
			temp.push(elem);
		}
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = temp[i];
	}
};

// Merge Sorted Array
const merge = (nums1, m, nums2, n) => {
	let i = m - 1,
		j = n - 1,
		k = m + n - 1;
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k--] = nums1[i--];
		} else {
			nums1[k--] = nums2[j--];
		}
	}
	while (j >= 0) {
		nums1[k--] = nums2[j--];
	}
};

// Remove Element
const removeElement = (nums, val) => {
	let k = nums.length;
	for (let i = 0; i < k; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			k--;
			i--;
		}
	}
	return k;
};

// Check If N and Its Double Exist
const checkIfExist = (arr) =>
	arr.some((n, ni) => arr.some((m, mi) => mi !== ni && n === 2 * m));

// Valid Mountain Array
const validMountainArray = (arr) => {
	let i = 0,
		j = arr.length - 1;
	while (i < j && arr[i] < arr[i + 1]) i++;
	while (i < j && arr[j] < arr[j - 1]) j--;
	return i === j && i !== 0 && j !== arr.length - 1;
};

// Replace Elements with Greatest Element on Right Side
const replaceElements = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length - 1; i++) {
		result.push(Math.max(...arr.slice(i + 1)));
	}
	result.push(-1);
	return result;
};

// Remove Duplicates from Sorted Array
const removeDuplicates = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};

// Sort Array By Parity
const sortArrayByParity = (arr) => {
	let even = [],
		odd = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) even.push(arr[i]);
		else odd.push(arr[i]);
	}
	return even.concat(odd);
};

// Height Checker
const heightChecker = (heights) => {
	const sorted = heights.slice().sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== sorted[i]) {
			count++;
		}
	}
	return count;
};

// Third Maximum Number
const thirdMax = (nums) => {
	const arr = [...new Set(nums.sort((a, b) => b - a))];

	if (arr.length < 3) {
		return arr[0];
	}

	return arr[2];
};

// Find All Numbers Disappeared in an Array
const findDisappearedNumbers = (nums) => {
	const sortSet = [...new Set(nums.sort((a, b) => a - b))];
	const result = [];

	for (let i = 1, j = 0; i <= nums.length; i++, j++) {
		if (i != sortSet[j]) {
			result.push(i);
			j--;
		}
	}
	return result;
};

// Rotate Array
const rotate = (nums, k) => {
	for (let i = 0; i < k; i++) {
		nums.unshift(nums.pop());
	}
	return nums;
};
