'use strict';

console.log(this);

function addNum(num1, num2) {
	console.log(this);
	return num1 + num2;
}

function addNum2(num1, num2) {
	console.log(this);
	return num1 + num2;
}

console.log(addNum)