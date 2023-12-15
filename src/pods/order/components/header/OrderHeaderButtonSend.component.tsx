import React from "react";
import { Button } from "@mui/material";
import { OrderDetail } from "../../Order.vm";
import { OrderHeaderConfirmSend } from "./OrderHeaderConfirmSend.component";

interface Props {
  orderItems: OrderDetail[];
}

export const OrderHeaderButtonSend: React.FC<Props> = (props) => {
  const { orderItems } = props;
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = React.useState<boolean>(false);

  const isDisabledSendAction = React.useMemo((): boolean => {
    const allAreValidItems = orderItems.every(
      (orderItem) => orderItem.status === "Válido"
    );
    return allAreValidItems ? false : true;
  }, [orderItems]);

  return (
    <>
      <Button
        variant="contained"
        sx={{ height: 45, minWidth: 190 }}
        disabled={isDisabledSendAction}
        onClick={() => setIsOpenConfirmDialog(true)}
      >
        Enviar
      </Button>
      <OrderHeaderConfirmSend
        isOpen={isOpenConfirmDialog}
        closeDialog={() => setIsOpenConfirmDialog(false)}
      />
    </>
  );
};
