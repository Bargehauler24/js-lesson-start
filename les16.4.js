'use strict';
/*
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/

function removePassword(reset) {
	if (reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
}

const user = {
	login: 'a@a.ru',
	password: '12345',
};

const resetUserPssowrd = removePassword.bind(user,true);
resetUserPssowrd();
console.log(user);