const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (randomNumber % 2 === 0) {
            resolve (`Сгенерированное число - ${randomNumber}`);
        } else {
            reject (`Сгенерированное число - ${randomNumber}`);
        }
    }, 3000);
  });
  
  myPromise
    .then((result) => {
        console.log('Завершено успешно', result);
      })
    .catch((error) => {
        console.log('Завершено с ошибкой', error);
      });