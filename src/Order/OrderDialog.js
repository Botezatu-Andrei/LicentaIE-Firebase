import React from 'react';
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
  return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
      <DialogContent>
        <h2>🚚 Comanda ta e pe drum </h2>
        <p>
          Ați primit un mail de confirmare cu comanda dumneavoastră.
        </p>
      </DialogContent>
      <DialogFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOpenOrderDialog();
        }}>
          Încă îmi e foame.
        </ConfirmButton>
      </DialogFooter>
    </Dialog>
  </> : <div/>
}
