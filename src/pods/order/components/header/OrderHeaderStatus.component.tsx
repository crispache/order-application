import React from "react";
import { LinearProgress, Typography } from "@mui/material";
import { OrderDetail } from "../../Order.vm";

interface Props {
  orderItems: OrderDetail[];
}

export const OrderHeaderStatus: React.FC<Props> = (props) => {
  const { orderItems } = props;

  const getStatePercentage = React.useMemo(() => {
      const totalOrderItems = orderItems.length;
      const totalValidOrderItems = orderItems.filter( (orderItem) => orderItem.status === 'Válido').length;
      const calculatePercentage = totalValidOrderItems * 100 / totalOrderItems;
      return +calculatePercentage.toFixed(2);
  }, [orderItems])

  return (
    <div className="order-header-status-info">
      <Typography variant="body2" marginBottom={1}>
        Estado
      </Typography>
      <LinearProgress value={getStatePercentage} variant="determinate" />
    </div>
  );
};
