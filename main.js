// var text = document.querySelector(".text");
// var number = Math.abs(Number(prompt("Son kiriting"))) ;
// if (number % 3 == 0 && number % 5 == 0) {
//   text.textContent = "FizzBuzz";
// }
// else if (number % 3 == 0){
//   text.textContent = "Fizz";
// }
// else if (number % 5 == 0){
//   text.textContent = "Buzz" ;
// }
// else {
//   text.textContent = "son 3 ga ham 5 ga ham bo'linmaydi";
// }

var userInfoName = document.querySelector(".name");
var userInfoLastname = document.querySelector(".lastname");
var userInfoAge = document.querySelector(".age");
var userInfoEmail = document.querySelector(".email");
var money = document.querySelector(".show");

var userName = prompt("Ismingizni kiriting");
var userLastname = prompt("Familiyangizni kiriting");
var userAge = prompt("Yoshingizni kiriting");
var userEmail = prompt("Emailingizni kiriting");
var usaMoney = prompt("Summa kiriting ($)");
var uzbMoney = 12280;
var moneyResult = Number(usaMoney) * uzbMoney;
 userInfoName.textContent =  userName;
 userInfoLastname.textContent =  userLastname ;
 userInfoAge.textContent =  userAge ;
 userInfoEmail.textContent =  userEmail ;
 money.textContent = moneyResult;