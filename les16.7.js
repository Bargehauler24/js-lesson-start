'use strict'; 
/* Сделать функию пользователя 
которая берет за основу userInfo 
и за счет замыкания создает новый объект, 
с которым можно работать 
как user1().increase(100) */ 
const userInfo = { 
	balance: 0, 
	operations: 0, 
	increase(sum) { 
		this.balance += sum; 
		this.operations++; 
	}, 
};

function user() {
	const userObj = userInfo;
	return function() {
		return  
	}
}

const user1 = user();
user1().increase(100);
