import React from "react";
import { LinearProgress, Typography } from "@mui/material";

interface Props {}

export const OrderHeaderStatus: React.FC<Props> = (props) => {
  return (
    <div className="order-header-status-info">
      <Typography variant="body2" marginBottom={1}>
        Estado
      </Typography>
      <LinearProgress value={50} variant="determinate" />
    </div>
  );
};
