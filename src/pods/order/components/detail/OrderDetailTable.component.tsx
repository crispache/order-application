import React from "react";
import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
} from "@mui/x-data-grid";

import { columns } from "./colums.data";
import { OrderDetail } from "../../Order.vm";
import { OrderDetailNotification } from "./OrderDetailNotification.component";

interface Notification {
  isOpen: boolean;
  type: "success" | "error";
  message: string;
}

interface Props {
  orderItems: OrderDetail[];
  selectedItems: string[];
  updateSelectedItems: (orderItemsIds: string[]) => void;
  updateOrderItemAmount: (orderItemId: string, amount: string) => void;
}

export const OrderDetailTable: React.FC<Props> = (props) => {
  const { orderItems, updateOrderItemAmount, selectedItems, updateSelectedItems } = props;
  const [notification, setNotification] = React.useState<Notification>({
    isOpen: false,
    type: "success",
    message: null,
  });

  const handleChangeItemAmount = (orderItem: OrderDetail) => {
    updateOrderItemAmount(orderItem.id, orderItem.amount);
    setNotification({...notification, isOpen: true, message: 'Guardado correctamente'})
  };

  const onRowSelectionModelChange = (selectedItemIds: string[]) => {
    updateSelectedItems(selectedItemIds);
  };

  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    setNotification({...notification, isOpen: true, type: 'error', message: error.message})
  }, []);

  return (
    <div className="order-detail-table">
      <DataGrid
        columns={columns}
        rows={orderItems}
        hideFooterPagination
        hideFooter
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={onRowSelectionModelChange}
        rowSelectionModel={selectedItems}
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
        processRowUpdate={(updatedRow: OrderDetail) => {
          handleChangeItemAmount(updatedRow);
          return updatedRow;
        }}
        onProcessRowUpdateError={handleProcessRowUpdateError}
      />

      <OrderDetailNotification
        isOpen={notification.isOpen}
        type={notification.type}
        message={notification.message}
        closeNotification={() =>
          setNotification({ ...notification, isOpen: false })
        }
      />
    </div>
  );
};
