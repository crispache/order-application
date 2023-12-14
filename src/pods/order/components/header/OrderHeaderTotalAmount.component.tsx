import React from "react";
import { Typography } from "@mui/material";
import { OrderDetail } from "../../Order.vm";
import { getFormattedNumberForOperations, getFormattedPriceEuroCurrency } from "../../utils";

interface Props {
  orderItems: OrderDetail[];
}

export const OrderHeaderTotalAmount: React.FC<Props> = (props) => {
  const { orderItems } = props;

  const totalAmount = React.useMemo(() => {
    const totalAmount = orderItems.reduce((acc, orderItem) => acc + (getFormattedNumberForOperations(orderItem.amount)), 0);
    return getFormattedPriceEuroCurrency(totalAmount);
  }, [orderItems]);

  return (
    <div className="order-header-total-amount">
      <Typography variant="h5">{totalAmount}</Typography>
      <Typography variant="body1"> Importe total </Typography>
    </div>
  );
};
