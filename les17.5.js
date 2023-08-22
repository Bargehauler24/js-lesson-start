'use strict';


function submitForm() {
	const input = document.querySelector('.input').value;
	if(!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	// document.querySelector('.notification').classList.add('notification_active');
	document.querySelector('.notification').setAttribute('class', 'notification');
}

function inputChanged(e){
	if (e.code == 'Enter') {
		submitForm()
	}
};