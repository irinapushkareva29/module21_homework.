//localStorage.clear ();

let userName = localStorage.getItem('userName');

//console.log('userName', userName);

let date = new Date ();

if (userName === null) {

  userName = prompt ("Hellow! Please enter your name");
  localStorage.setItem ('userName', userName);
  let newUserName = localStorage.getItem('userName');
  console.log ('userName ', newUserName);
  
  localStorage.setItem ('lastDate', date);
  let lastUserDate = localStorage.getItem('lastDate');
  console.log ('lastDate ', lastUserDate);

} else {
  
  lastUserDate = localStorage.getItem('lastDate');
  alert (`Hellow, ${userName}! Long time no see!The last time you were on our site ${lastUserDate}.`);
  localStorage.setItem ('lastDate', date);
}