const cities = {
	msk:{
		lt:200,
		temp: 25
	},
	spb: {
		lt:100,
		temp:20
	}
}

let sumTemp = 0;
console.log(Object.keys(cities))
let citiesCount = Object.keys(cities).length;
for (const key in cities){
	citiesCount++;
	sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);
