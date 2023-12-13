import React from "react";
import { Typography } from "@mui/material";

interface Props {
  totalAmount: string;
}

export const OrderHeaderTotalAmount: React.FC<Props> = (props) => {
  const { totalAmount } = props;
  return (
    <div className="order-header-total-amount">
      <Typography variant="h5">{totalAmount ? totalAmount : "0"} €</Typography>
      <Typography variant="body1"> Importe total </Typography>
    </div>
  );
};
