import React from "react";
import Button from "@mui/material/Button";
import { TypeValidationActions } from "../../Order.vm";

interface Props {
  handleValidation: (type: TypeValidationActions) => void;
}

export const OrderDetailValidationButtons: React.FC<Props> = (props) => {
  const { handleValidation } = props;

  return (
    <div className="order-detail-buttons">
      <Button
        variant="contained"
        color="success"
        onClick={() => handleValidation("validate")}
      >
        Validar
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleValidation("invalidate")}
      >
        Invalidar
      </Button>
    </div>
  );
};
