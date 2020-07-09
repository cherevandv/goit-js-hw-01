let country;
let priceDelivery;

country = prompt("Укажите страну доставки");

if (country === null) {
  console.log(`Отменено пользователем.`);
} else {
  switch (country.toLowerCase()) {
    case "китай":
      priceDelivery = 100;
      console.log(
        `Доставка в ${country} будет стоить ${priceDelivery} кредитов`
      );
      break;

    case "чили":
      priceDelivery = 250;
      console.log(
        `Доставка в ${country} будет стоить ${priceDelivery} кредитов`
      );
      break;

    case "австралия":
      priceDelivery = 170;
      console.log(
        `Доставка в ${country} будет стоить ${priceDelivery} кредитов`
      );
      break;

    case "индия":
      priceDelivery = 80;
      console.log(
        `Доставка в ${country} будет стоить ${priceDelivery} кредитов`
      );
      break;

    case "ямайка":
      priceDelivery = 120;
      console.log(
        `Доставка в ${country} будет стоить ${priceDelivery} кредитов`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна.");
  }
}
