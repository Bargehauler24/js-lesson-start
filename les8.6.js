const tasks = ['задача 1'];

function Add(task) {
	tasks.push(task);
}

function Remove(task){
	const index = tasks.indexOf(task);
	if(index === -1){
		return;
	}
	tasks.splice(index,1);
}

function Prioritize(task){
	const index = tasks.indexOf(task);
	if(index === -1){
		return;
	}
	const oldTask = tasks[index];
	tasks.splice(index,1);
	tasks.unshift(oldTask);
}


Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 4');
console.log(tasks);
Prioritize('Задача 4');
console.log(tasks);




