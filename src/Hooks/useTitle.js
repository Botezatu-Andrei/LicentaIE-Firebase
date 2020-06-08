import { useEffect } from "react";

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
          ? `LicentaIE`
          : `[${orders.length}] Produse in comanda dumneavoastra `;
    }
  });
}
