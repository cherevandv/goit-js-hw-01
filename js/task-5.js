let country;
let priceDelivery;

country = prompt("Укажите страну доставки");

if (country === null) {
  console.log(`Отменено пользователем.`);
} else {
  switch (country.toLowerCase()) {
    case "китай":
      priceDelivery = 100;
      break;

    case "чили":
      priceDelivery = 250;
      break;

    case "австралия":
      priceDelivery = 170;
      break;

    case "индия":
      priceDelivery = 80;
      break;

    case "ямайка":
      priceDelivery = 120;
      break;

    default:
      priceDelivery = "";
  }

  if (priceDelivery) {
    console.log(`Доставка в ${country} будет стоить ${priceDelivery} кредитов`);
  } else {
    alert("В вашей стране доставка не доступна.");
  }
}
