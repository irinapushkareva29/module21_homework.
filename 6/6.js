let myKey = localStorage.getItem('imgKey');

const pageNumber = document.querySelector('.inPage');
const limit = document.querySelector('.inLimit');
const btn = document.querySelector('.button');
const divImg = document.querySelector('.div');

const useRequest = ()=> {
    fetch('https://picsum.photos/v2/list?page=${pageNumber.value}&limit=${limit.value}')
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

function createListImages(array) {
	let images = '';

	for (let key in array) {
		const imgUrl = array[key]["download_url"];
		const imgAuthor = array[key]["author"];
		const imgHtml = `<div><img src="${imgUrl}"><p>Image by ${imgAuthor}</p></div>`
		images = images + imgHtml;
	}
	div.innerHTML = images;
}

function chooseNumber(number) {
  if (number >= 1 && number <= 10) {
    return true
  } else {
    return false
  }
}

btn.addEventListener('click', async() => {
  if (chooseNumber(pageNumber.value) === true &&chooseNumber(limit.value) === true) {
    const result = await useRequest();
    createListImages(result);
    localStorage.setItem('imgKey', JSON.stringify(result));
  } else {
      if (myKey !== null) {
			   createListImages(JSON.parse(myKey));
		}
  }
});