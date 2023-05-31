let user = {
	name: 'Ivan',
	age: 40,
	city: 'Moscow'
};

const {age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
	skills: ['Разработка', 'Дизайн'],
	creditCard: '88005553535'
};
user.test = 'test'

user = {
	...user,
	...additionalData
}
console.log(user);
