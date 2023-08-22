'use strict';

// document.querySelector('.button').addEventListener('click', function() {
// 	const input = document.querySelector('.input').value;
// 	if(!input) {
// 		return;
// 	}
// 	document.querySelector('.panel').innerText = input;
// 	document.querySelector('.штзге').value = '';
// 	console.log(input);
// });

function changeClick() {
	const input = document.querySelector('.input').value;
	if(!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	console.log(input);
}