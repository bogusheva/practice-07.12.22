//Task 2
/*Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. */
let userNameSurname = "Olena Bogusheva";
let userFullName = "Olena Bogusheva";
let userNamesData = "Olena Bogusheva";
let nameSurnameOfUser = "Olena Bogusheva";

//Task 1
/*Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);*/
/* name-surname
   1name
   NameSurname
   .name
   User_Name
*/

//Task 4
/*Вкажи всі можливі способи 
    коментування коду;*/
//Вкажи всі можливі способи коментування коду;

/*Task 5
Які стилі написання імен змінних ти знаєш? - For JS:
    camelCase
    kebab_case
    SCREAMING_SNAKE_CASE - for const*/

/*Task 6
Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;*/
let userName = prompt("What is your name?");
alert(`Hello, ${userName}!`);

/*Task 7
Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;*/
const CURRENT_YEAR = 2022;
let userBirthYear = prompt("What is your year of birth?", 1989);
let wasBirthday = confirm(
  "Do you have already birthday in this year? Yes/OK, No/Cancel"
);
if (wasBirthday) {
  alert(`You are ${CURRENT_YEAR - userBirthYear} years old`);
} else {
  alert(`You are ${CURRENT_YEAR - userBirthYear - 1} years old`);
}

/*Task 8
Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата*/
let squareLength = prompt(
  "Imagine the square. What is its side in centimeters?",
  10
);
alert(`The perimeter of a square is ${4 * squareLength} cm`);

/*Task 9
Запитай у користувача радіус кола і виведи площу такої окружності.*/
let circleRadius = prompt(
  "Imagine the circle. What is its radius in centimeters?",
  10
);
/*S = π × r2*/
let areaCircle = Math.PI * circleRadius * circleRadius;
alert(`The area of a circle is ${areaCircle.toFixed(3)} sq.cm`);

/*Task 10
Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/
let distanceBetweenCities = prompt(
  "What is the distance between two cities in km?",
  100
);
let userMovementTime = prompt(
  "How many hours would you spend to reach another city?",
  2
);
alert(
  `Your velocity should not be less than ${
    distanceBetweenCities / userMovementTime
  } km/hour`
);

/*Task 11
Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.*/
const DOLLAR_EURO_EXCHANGE_RATE = 0.95;
let amountOfDollars = prompt(
  "How many dollars do you want to exchange for euros?",
  100
);
alert(`It will be ${amountOfDollars * DOLLAR_EURO_EXCHANGE_RATE} euros`);
