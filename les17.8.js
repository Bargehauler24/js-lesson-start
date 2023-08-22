'use strict';


function submitForm() {
	const input = document.querySelector('.input').value;
	if(!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
}

function inputChanged(e){
	if (e.code == 'Enter') {
		submitForm()
	}
};

const obj = JSON.parse('{"a": 1}');
console.log(obj.a);
const str = JSON.stringify(obj);
console.log(str)

