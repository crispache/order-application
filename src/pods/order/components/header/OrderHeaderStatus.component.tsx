import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { OrderDetail } from "../../Order.vm";

interface Props {
  orderItems: OrderDetail[];
}

export const OrderHeaderStatus: React.FC<Props> = (props) => {
  const { orderItems } = props;

  const getStatePercentage = React.useMemo(() => {
    const totalOrderItems = orderItems.length;
    const totalValidOrderItems = orderItems.filter((orderItem) => orderItem.status === "Válido").length;
    const calculatePercentage = (totalValidOrderItems * 100) / totalOrderItems;
    return +calculatePercentage.toFixed(2);
  }, [orderItems]);

  return (
    <div className="order-header-status-info">
      <Typography variant="body2" marginBottom={1}>
        Estado
      </Typography>
      <div className="order-header-status-content">
        <Box flex={1}>
          <LinearProgress
            value={getStatePercentage}
            variant="determinate"
            color={getStatePercentage === 100 ? "success" : "primary"}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary">
          {`${Math.round(getStatePercentage)}%`}
        </Typography>
      </div>
    </div>
  );
};
