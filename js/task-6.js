let input;
let total = 0;

do {
  input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    console.log(`Неверный формат числа. Попробуйте ещё раз:)`);
    continue;
  }

  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
