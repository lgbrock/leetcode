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
