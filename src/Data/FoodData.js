export function formatPrice(price) {
  return price.toLocaleString("ro-RO", {
    style: "currency",
    currency: "Lei"
  });
}

export const foodItems = [
  {
    name: "Pizza Margherita-Restaurant Sergiana",
    img: "/img/pizza4.jpg",
    section: "Pizza",
    price: 25
  },
  {
    name: "Pizza Margherita-Restaurant La Ceaun ",
    img: "/img/pizza5.png",
    section: "Pizza",
    price: 30
  },
  {
    name: "Pizza Prosciuto-Restaurant Dei Frati",
    img: "/img/pizza6.jpg",
    section: "Pizza",
    price: 28
  },
  {
    name: "Pizza Prosciuto-Restaurant Prato",
    img: "/img/Margherita.jpg",
    section: "Pizza",
    price: 35
  },
  {
    name: "Pizza Marinara-Restaurant Sergiana",
    img: "/img/Pizza-Marinara.jpg",
    section: "Pizza",
    price: 30
  },
  {
    name: "Pizza Pepperoni-Restaurant La Ceaun",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 32
  },
  {
    name: "Pizza Prosciutto-Restaurant Sergiana",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 25
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Pizza vegetariana-Restaurant Dei Frati",
    section: "Pizza",
    price: 29
  },
  {
    img: "/img/pizza-quattro-stagioni.jpg",
    name: "Pizza Quattro Stagioni-Restaurant Prato",
    section: "Pizza",
    price: 30
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger-Restaurant Prato",
    section: "Sandwich",
    choices: ["Extra maioneza"],
    price: 25
  },
  {
    img: "/img/burger3.jpg",
    name: "Burger-Restaurant Sergiana",
    section: "Sandwich",
    choices: ["Extra usturoi", "Extra ketchup si mustar"],
    price: 15
  },
  {
    img: "/img/burger2.jpg",
    name: "Burger-Restaurant La Ceaun",
    section: "Sandwich",
    choices: ["Extra usturoi", "Extra ketchup si mustar"],
    price: 30
  },
  {
    img: "/img/burger1.jpeg",
    name: "Burger-Restaurant Dei Frati",
    section: "Sandwich",
    choices: ["Extra usturoi", "Extra ketchup si mustar"],
    price: 28
  },
  { img: "/img/gyro.jpeg", 
    name: "Gyro-Restaurant Sergiana", 
    section: "Sandwich", 
    price: 9 },
  {
    img: "/img/sandwich.jpeg",
    name: "Kebap-Restaurant La Ceaun",
    section: "Sandwich",
    price: 8
  },
  {
    img: "/img/cartofi3.jpg",
    name: "Cartofi prajiti-Restaurant Sergiana",
    section: "Meniuri",
    choices: ["Portie mare", "Portie mica"],
    price: 6
  },
  {
    img: "/img/cartofi2.png",
    name: "Cartofi prajiti-Restaurant La Ceaun",
    section: "Meniuri",
    price: 7,
    choices: ["Portie mare", "Portie mica"]
  },
  {
    img: "/img/drink.jpg",
    
    section: "Bauturi",
    price: 3,
    choices: ["Coca Cola", "Sprite", "Fanta" , "Mirinda" , "Bere"]
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});


