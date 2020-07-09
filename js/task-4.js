let credits = 23580;
const pricePerDroid = 3000;
let numberDroid;
let totalPrice;

//Вариант 1:

numberDroid = prompt("Введите количество дроидов, (шт)");

numberDroid === null
  ? console.log("Отменено пользователем!")
  : (numberDroid = Number.parseInt(numberDroid));

if (
  Number.isNaN(numberDroid) ||
  numberDroid < 0 ||
  numberDroid === 0 ||
  numberDroid === null
) {
  console.log("Неверный формат числа!");
} else {
  totalPrice = numberDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let balance = credits - totalPrice;
    console.log(
      `Вы купили ${numberDroid} дроидов, на счету осталось ${balance} кредитов.`
    );
  }
}

// Вариант 2:

// do {
//   numberDroid = prompt("Введите количество дроидов, (шт)");
//   if (numberDroid === null) {
//     console.log("Отменено пользователем!");
//     break;
//   }
//   numberDroid = Number.parseInt(numberDroid);
//   totalPrice = numberDroid * pricePerDroid;
// } while (Number.isNaN(numberDroid) || numberDroid < 0 || numberDroid === 0);

// if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   let balance = credits - totalPrice;
//   console.log(
//     `Вы купили ${numberDroid} дроидов, на счету осталось ${balance} кредитов.`
//   );
// }
