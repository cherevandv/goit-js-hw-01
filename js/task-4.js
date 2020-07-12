let credits = 23580;
const pricePerDroid = 3000;
let numberDroid;
let totalPrice;

numberDroid = prompt("Введите количество дроидов, (шт)");

if (numberDroid === null) {
  console.log("Отменено пользователем!");
} else {
  numberDroid = Number.parseInt(numberDroid);
  if (Number.isNaN(numberDroid) || numberDroid < 0 || numberDroid === 0) {
    console.log("Неверный формат числа!");
  }
}

if (numberDroid > 0) {
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
