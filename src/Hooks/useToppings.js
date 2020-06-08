import { useState } from "react";

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings
  };
}

const toppingsList = [
  "Extra brânză",
  "Pepperoni",
  "Sos usturoi",
  "Ceapă",
  "Ardei iute",
  "Ananas",
  "Sos barbeque",
  "Sos tatsiki",
  
];

function getDefaultToppings() {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false
  }));
}
