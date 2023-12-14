import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface Props {
  type: "success" | "error";
  message: string;
  closeNotication: () => void;
}

export const OrderDetailNotification: React.FC<Props> = React.memo((props) => {
  const { type, message, closeNotication } = props;

  return (
    <>
      <Snackbar
        open
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={closeNotication}
        autoHideDuration={6000}
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
