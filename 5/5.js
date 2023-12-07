const btn = document.querySelector('.button');
const inp = document.querySelector('.input');
const ul = document.querySelector('.ul');

const useRequest = () => {
	return fetch(`https://jsonplaceholder.typicode.com/users/${inp.value}/todos`)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			return json;
		})
		.catch(() => {
			console.log('error')
		});
}

function createTasks(array) {
	let tasks = '';

	for (let key in array) {
		const task = array[key]["title"];
		const status = array[key]["completed"];
		let li;
		if (status) {
			li = `<li style="text-decoration: line-through">${task}</li>`
		} else {
			li = `<li>${task}</li>`
		}
		tasks = tasks + li;
	}
	ul.innerHTML = tasks;
}

btn.addEventListener('click', async () => {
	const requestResult = await useRequest();
	if (requestResult.length > 0) {
		createTasks(requestResult)
	} else {
		console.log("Пользователь с указанным id не найден");
		createTasks(null)
	}
})