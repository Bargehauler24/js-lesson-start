'use strict';

const successMessage = 'Success';
const user = {
	name: 'Vasya',
	roles: []
}

function addRole(user, role) {
	if (role == 'admin'){
		const message = 'Error';
		console.log(message);
		return user;
	}
	user.roles.push(role);
	let successMessage = 'Ура';
	console.log(successMessage);

	function logRoles(){
		console.log(user.roles);
	}
	logRoles();
	return user;
}

console.log(addRole(user, 'adsmin'));
console.log(successMessage);


