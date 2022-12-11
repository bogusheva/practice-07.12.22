//Lesson 2 -HW2 11.12.22
//Мінімум
//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let a = 0.1;
let b = 0.2;
console.log((a + b).toFixed(1));

//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let c = "1";
let d = 2;
console.log(c + d); //wrong math answer
console.log(+c + d); //right answer
console.log(Number(c) + d); //right answer

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let flashDriveVolume = prompt(
  "What is the volume of your flash drive, in GB?",
  32
);
const fileVolumeGb = 0.82;
let amountOfFiles = Math.floor(flashDriveVolume / fileVolumeGb);
console.log(
  `You can have ${amountOfFiles} files on flash drive with volume ${flashDriveVolume} GB`
);

// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let amountOfMoney = Number(
  prompt("How many dollars do you wanna spend on chocolate bar?", 100)
);
const priceChocolateBar = Number(
  prompt("How much does the chocolate bar cost?", 6)
);
if (
  !amountOfMoney ||
  amountOfMoney <= 0 ||
  !priceChocolateBar ||
  priceChocolateBar <= 0
) {
  console.log(
    "You should give me right answers. Price and amount of money should be numbers >0."
  );
} else {
  console.log(
    `You have ${amountOfMoney} dollars, so you can buy ${Math.floor(
      amountOfMoney / priceChocolateBar
    )} chocolate bars and there will ${(
      amountOfMoney % priceChocolateBar
    ).toFixed(2)} dollars change`
  );
}

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let threeFigureNumber;
let upsideDownNumber = "";
let calculationNumber = 0;
do {
  threeFigureNumber = prompt("Give me any three-figure number", 345);
} while (!threeFigureNumber || threeFigureNumber.length != 3);
do {
  upsideDownNumber = upsideDownNumber + String(threeFigureNumber % 10);
  threeFigureNumber = Math.floor(threeFigureNumber / 10);
} while (threeFigureNumber !== 0);
alert(`This number upside down will be ${upsideDownNumber}`);

// Максимум

// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const interestPerAnnum = 0.05;
const monthsOfDeposit = 2;
const monthsInYear = 12;
let amountOfDeposit;
do {
  amountOfDeposit = Number(
    prompt("How much do you want to deposit in dollars?", 100)
  );
} while (!amountOfDeposit || amountOfDeposit <= 0);

let clientInterestSimple =
  (interestPerAnnum / monthsInYear) * monthsOfDeposit * amountOfDeposit;
let clientInterestCompound =
  (Math.pow(1 + interestPerAnnum / monthsInYear, monthsOfDeposit) - 1) *
  amountOfDeposit;
console.log(
  `Dear client! If your deposit will be ${amountOfDeposit.toFixed(
    2
  )} dollars, you will have in ${monthsOfDeposit} months:`
);
console.log(`- ${clientInterestSimple.toFixed(2)} dollars of simple interest`);
console.log(
  `- ${clientInterestCompound.toFixed(2)} dollars of compound interest`
);

// 2. Що повернуть вирази:
//  2 && 0 && 3  // 0 because return first false

//  2 || 0 || 3  // 2 because return first true

// 2 && 0 || 3 // 3 because firstly && choose false between 2/0, then || choose first true

//Lesson 1- Task 2
/*Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. */
// let userNameSurname = "Olena Bogusheva";
// let userFullName = "Olena Bogusheva";
// let userNamesData = "Olena Bogusheva";
// let nameSurnameOfUser = "Olena Bogusheva";

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
// let userName = prompt("What is your name?");
// alert(`Hello, ${userName}!`);

/*Task 7
Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;*/
/*const CURRENT_YEAR = 2022;
let userBirthYear = prompt("What is your year of birth?", 1989);
let wasBirthday = confirm(
  "Do you have already birthday in this year? Yes/OK, No/Cancel"
);
if (wasBirthday) {
  alert(`You are ${CURRENT_YEAR - userBirthYear} years old`);
} else {
  alert(`You are ${CURRENT_YEAR - userBirthYear - 1} years old`);
}*/

/*Task 8
Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата*/
/*let squareLength = prompt(
  "Imagine the square. What is its side in centimeters?",
  10
);
alert(`The perimeter of a square is ${4 * squareLength} cm`);*/

/*Task 9
Запитай у користувача радіус кола і виведи площу такої окружності.*/
/*let circleRadius = prompt(
  "Imagine the circle. What is its radius in centimeters?",
  10
);*/
/*S = π × r2*/
/*let areaCircle = Math.PI * circleRadius * circleRadius;
alert(`The area of a circle is ${areaCircle.toFixed(3)} sq.cm`);*/

/*Task 10
Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/
/*let distanceBetweenCities = prompt(
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
);*/

/*Task 11
Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.*/
/*const DOLLAR_EURO_EXCHANGE_RATE = 0.95;
let amountOfDollars = prompt(
  "How many dollars do you want to exchange for euros?",
  100
);
alert(`It will be ${amountOfDollars * DOLLAR_EURO_EXCHANGE_RATE} euros`);*/
