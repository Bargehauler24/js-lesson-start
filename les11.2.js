const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for (const trans of transactionInUSD){
	transactionInRUB.push(trans * 81);
}

console.log(transactionInUSD);
console.log(transactionInRUB);


const transactionInRUB2 = transactionInUSD.map((trans,i) => {
	console.log(i);
	return trans * 81;
});

console.log(transactionInUSD);
console.log(transactionInRUB2);