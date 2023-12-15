import React from "react";
import { Typography } from "@mui/material";
import { OrderDetail, OrderInfo } from "../../Order.vm";
import { OrderHeaderDetails } from "./OrderHeaderDetails.component";
import { OrderHeaderStatus } from "./OrderHeaderStatus.component";
import { OrderHeaderTotalAmount } from "./OrderHeaderTotalAmount.component";
import { OrderHeaderButtonSend } from "./OrderHeaderButtonSend.component";

interface Props {
  info: OrderInfo;
  orderItems: OrderDetail[];
}

export const OrderHeader: React.FC<Props> = (props) => {
  const { info, orderItems } = props;

  return (
    <div className="order-header-container">
      <div className="order-header-title">
        <Typography variant="h4"> Pedido a proveedor </Typography>
        <OrderHeaderButtonSend orderItems={orderItems} />
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
    </div>
  );
};
