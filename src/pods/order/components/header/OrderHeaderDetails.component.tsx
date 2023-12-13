import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

interface Props {
  orderNumber: string;
  supplier: string;
  date: string;
}

export const OrderHeaderDetails: React.FC<Props> = React.memo((props) => {
  const { orderNumber, supplier, date } = props;

  return (
    <div className="order-header-details-info">
      <TextField
        label="Número"
        variant="standard"
        disabled
        value={orderNumber}
      />
      <TextField
        label="Proveedor"
        variant="standard"
        disabled
        value={supplier}
      />
      <TextField
        label="Fecha"
        variant="standard"
        disabled
        value={date}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CalendarMonth />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
});
