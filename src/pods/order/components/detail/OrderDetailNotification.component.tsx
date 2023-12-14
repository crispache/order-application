import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface Props {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
  closeNotification: () => void;
}

export const OrderDetailNotification: React.FC<Props> = React.memo((props) => {
  const { isOpen, type, message, closeNotification } = props;

  return (
    <>
      <Snackbar
        open={isOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={closeNotification}
        autoHideDuration={2500}
      >
        <Alert
          onClose={closeNotification}
          severity={type === 'success' ? 'success' : 'error'}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
});
