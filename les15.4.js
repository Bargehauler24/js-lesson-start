'use strict';

console.log(this);

function addNum(num1, num2) {
	console.log(this);
	return num1 + num2;
}

const addNum2 = (num1, num2) => {
	console.log(this);
	return num1 + num2;
}

const user = {
	name: 'Вася',
	surname: 'Пупкин',
	getFullName: function () {
		console.log(this);
		return this.name + ' ' + this.surname;
	}
}

user.getFullName();

const user2 = {
	name: 'Илья',
	surname: 'Егоров',
};

user2.getFullName = user.getFullName;
user2.getFullName();