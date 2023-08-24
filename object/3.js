const food = [
  { name: "Паста Болоньезе", weight: 350, price: 68, quantity: 10 },
  { name: "Спагетти с овощами", weight: 350, price: 56, quantity: 8 },
  { name: "Пене с куриным филе", weight: 400, price: 68, quantity: 16 },
  { name: "Пицца Куриная с ананасом", weight: 675, price: 139, quantity: 30 },
  { name: "Пицца Четыре сезона метровая", weight: 1600, price: 339, quantity: 8 },
  { name: "Пицца Итальянская", weight: 740, price: 159, quantity: 5 },
  { name: "Салат Джонатан с семгой", weight: 230, price: 77, quantity: 4 },
  { name: "Салат Цезарь с креветкой", weight: 230, price: 69, quantity: 5 }
];

function getFoodPrice(arrayFood) {
  const resultFood = arrayFood.filter((item) =>
    item.price >= 80 && item.quantity <= 7
  );
  let result = 0;
  for (let item of resultFood) {
    result = result + item.weight * item.quantity;
  }
  return result;
}

console.log(getFoodPrice(food));