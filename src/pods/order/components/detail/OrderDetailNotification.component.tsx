import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface Props {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
  closeNotication: () => void;
}

export const OrderDetailNotification: React.FC<Props> = React.memo((props) => {
  const { isOpen, type, message, closeNotication } = props;

  return (
    <>
      <Snackbar
        open={isOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={closeNotication}
        autoHideDuration={2500}
      >
        <Alert
          onClose={closeNotication}
          severity={type === 'success' ? 'success' : 'error'}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
});
