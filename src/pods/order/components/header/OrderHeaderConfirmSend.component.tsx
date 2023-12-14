import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { OrderHeaderSuccessfulSend } from "./OrderHeaderSuccessfulSend.component";

interface Props {
  isOpen: boolean;
  closeDialog: () => void;
}

export const OrderHeaderConfirmSend: React.FC<Props> = (props) => {
  const { isOpen, closeDialog } = props;
  const [isShowSuccessMessage, setIsShowSuccessMessage] = React.useState<boolean>(false);

  const actionSend = () => {
    closeDialog();
    setIsShowSuccessMessage(true);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={closeDialog}>
        <DialogTitle>Enviar pedido</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro que quiere enviar este pedido?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ marginBottom: 1 }}>
          <Button onClick={closeDialog} variant="outlined" color="primary">
            Cerrar
          </Button>
          <Button onClick={actionSend} variant="contained" autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      <OrderHeaderSuccessfulSend
        isShowMessage={isShowSuccessMessage}
        closeMessage={() => setIsShowSuccessMessage(false)}
      />
    </>
  );
};
