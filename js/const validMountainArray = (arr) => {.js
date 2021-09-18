const validMountainArray = (arr) => {
	let i = 0,
		j = arr.length - 1;
	while (i < j && arr[i] < arr[i + 1]) i++;
	while (i < j && arr[j] < arr[j - 1]) j--;
	return i === j && i !== 0 && j !== arr.length - 1;
};

console.log(validMountainArray([1, 2, 3, 4,1]));
