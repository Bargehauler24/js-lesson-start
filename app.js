// console.log('Good test');

// const isSuited = 100 -10 > 90 - 5;
// console.log(isSuited);


// let b;
// let c;
// c = b = 100 + 50;
// console.log(c);
// console.log(b);

// let d = null;
// console.log(typeof d);

// const projectName = 'сайт магазина';
// const price = 2000;
// const author = 'Василий Пупкин';

// const template = `${author} заказал ${projectName} по цене ${price} $`;

// console.log(template);

// let a = 5;
// let b 

// console.log(Boolean (b));
// console.log(Boolean('5') + 9);
// console.log(String('10') - 5 + Boolean('') + '1');
// console.log('0' + 5);

// const secretNumber = 7;
// if (secretNumber === 7) {
// 	console.log('Угадал строго');
// }

// if (secretNumber == 7){
// 	console.log('Угадал не строго');
// }

// const role = 'manager';

// switch (role) {
// 	case 'manager':
// 		console.log('Менеджер');
// 		break;
// 	case 'admin':
// 		console.log('Админ');
// 		break;
// 	case 'CEO':
// 		console.log('CEO');
// 		break;
// 	default:
// 		console.log('Мы тебя не знаем!');	
// }

// 10 > 0 ? console.log('Больше 0') : console.log('Не больше 0');


// const res = prompt('Сколько будет 7+ или -15?');
// switch(true) {
// 	case res === 'Я не робот':
// 	case Number(res) === 22:
// 	case Number(res) === -8:
// 		console.log	('Успех');
// 		break;
// 	default:
// 		console.log('Вы робот!');	
// }


// function logName(name, surname){
// 	console.log(`text ${name} ${surname}`);
// }

// logName('Илья', 'Бурлаченков');


// function countDepSum(depInUSD, month, rate) {
// 	const sum = depInUSD * (1+ rate /12) ** month;
// 	return sum;
// }

// const example1 = countDepSum(1000,24,0.12);
// console.log(example1);




// function powerOfTwo(num) {
// 	return num * num;
// }

// console.log(powerOfTwo(14));

// const poft = (num) => num * num;
// console.log(poft(6));

// const res =(num,power) => num ** power;
// console.log(res(2,3));


// function canAccessWebsite(age) {
// 	if (age < 18) {
// 		return 'No';
// 	}
// 	return 'Yes';
// }

// console.log(canAccessWebsite(16));

// const canAccessWebsite2 = age => age < 18 ? 'No' : 'Yes';

// console.log(canAccessWebsite2(18));



// const KG_IN_USD = 7;
// const KM_IN_USD = 9;

// function calculateW(present) {
// 	return present * KG_IN_USD;
// }

// function calculateKm(distence) {
// 	return distence * KM_IN_USD;
// }


// function getExchangePrice(present1, present2, distance) {
// 	const price1 = calculateW(present1);
// 	const price2 = calculateW(present2);
// 	const distancePrice = calculateKm(distance);
// 	return price1 + price2 + distancePrice;
// }

// console.log(getExchangePrice(1,2,10));


// function computeCredit(age, hasJob = false) {
// 	switch(true){
// 		case age > 24 && hasJob:
// 			return 500;
// 		case age > 24:
// 			return 100;
// 		default:
// 			return 0;		
// 	}
// }

// function canBuy(productPrice, age, hasJob, money){
// 	const creditMoney = computeCredit(age, hasJob);
// 	return productPrice < money + creditMoney;
// }

// console.log(canBuy(2000,25,1900));

// function isAdmin(userId) {
//     if (userId === 10) {
//         return true;
//     } else {
//         return isAdmin(10);
//     }
// }
// isAdmin(5);

// function start() {
//     return 'start';
// }
// function run() {
//     return start() + ' finish ' + start();
// }
// console.log(run());


