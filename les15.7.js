'use strict';

/*
Дополнить объект методом для получения имени:
- компании
- сео
- сотрудника
*/

const company = {
	name: "ООО Агро",
	employees: [
		{
			name: "Света",
			getName: function (){
				return this.name;
	}
		},
	],
	ceo: {
		name: "Вася",
		getName: function (){
			return this.name;
	}

	},
	getName: function (){
		return this.name;
	}
}


console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee =>employee.getName()));

