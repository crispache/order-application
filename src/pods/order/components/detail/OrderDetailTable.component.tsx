import React from "react";
import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
} from "@mui/x-data-grid";

import { columns } from "./colums.data";
import { OrderDetail } from "../../Order.vm";

interface Props {
  orderItems: OrderDetail[];
  selectedItems: string[];
  updateSelectedItems: (orderItemsIds: string[]) => void;
  updateOrderItemAmount: (orderItemId: string, amount: string) => void;
}

export const OrderDetailTable: React.FC<Props> = (props) => {
  const { orderItems, updateOrderItemAmount, selectedItems, updateSelectedItems } = props;

  const handleChangeItemAmount = (orderItem: OrderDetail) => {
    updateOrderItemAmount(orderItem.id, orderItem.amount);
  };

  const onRowSelectionModelChange = (selectedItemIds: string[]) => {
    updateSelectedItems(selectedItemIds);
  };

  // TODO: REVISAR
  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    /*   setSnackbar({ children: error.message, severity: 'error' }); */
    console.log(error);
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
    </div>
  );
};
