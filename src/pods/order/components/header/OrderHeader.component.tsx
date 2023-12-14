import React from "react";
import { Button, Typography } from "@mui/material";
import { OrderDetail, OrderInfo } from "../../Order.vm";
import { OrderHeaderDetails } from "./OrderHeaderDetails.component";
import { OrderHeaderStatus } from "./OrderHeaderStatus.component";
import { OrderHeaderTotalAmount } from "./OrderHeaderTotalAmount.component";
import { OrderHeaderConfirmSend } from "./OrderHeaderConfirmSend.component";

interface Props {
  info: OrderInfo;
  orderItems: OrderDetail[];
}

export const OrderHeader: React.FC<Props> = (props) => {
  const { info, orderItems } = props;
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] =
    React.useState<boolean>(false);

  const isDisabledSendAction = React.useMemo((): boolean => {
    const allAreValidItems = orderItems.every(
      (orderItem) => orderItem.status === "Válido"
    );
    return allAreValidItems ? false : true;
  }, [orderItems]);

  return (
    <div className="order-header-container">
      <div className="order-header-title">
        <Typography variant="h4"> Pedido a proveedor </Typography>
        <Button
          variant="contained"
          sx={{ height: 45, minWidth: 190 }}
          disabled={isDisabledSendAction}
          onClick={() => setIsOpenConfirmDialog(true)}
        >
          Enviar
        </Button>
      </div>

      <div className="order-header-info">
        <div>
          <OrderHeaderDetails
            orderNumber={info.orderNumber}
            supplier={info.supplier}
            date={info.date}
          />
          <OrderHeaderStatus orderItems={orderItems} />
        </div>

        <OrderHeaderTotalAmount orderItems={orderItems} />
      </div>

      <OrderHeaderConfirmSend isOpen={isOpenConfirmDialog} closeDialog={() => setIsOpenConfirmDialog(false)} />
    </div>
  );
};
