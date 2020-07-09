let total = 100;
let ordered;

ordered = prompt(`Введите количество товаров`);

if (total < ordered) {
  alert("На складе недостаточно товаров!");
} else if (ordered <= 0) {
  alert("Недопустимое количество товаров");
} else {
  alert("Заказ оформлен, с вами свяжется менеджер");
}
