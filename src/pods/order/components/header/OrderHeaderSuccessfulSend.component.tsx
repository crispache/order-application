import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

interface Props {
  isShowMessage: boolean;
  closeMessage: () => void;
}

export const OrderHeaderSuccessfulSend: React.FC<Props> = (props) => {
  const { isShowMessage, closeMessage } = props;

  return (
    <>
      <Dialog open={isShowMessage} onClose={closeMessage}>
        <DialogTitle display="flex" alignItems="center">
          Pedido <CheckCircle color="success" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Su pedido se ha realizado correctamente.</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ marginBottom: 1 }}>
          <Button onClick={closeMessage} variant="contained" color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
