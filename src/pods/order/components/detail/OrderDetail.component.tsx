import React from "react";
import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import * as vm from "../../Order.vm";
import { columns } from "./colums.data";

interface Props {
  orderItems: Array<vm.OrderDetail>;
  validationActions: (type: vm.TypeValidationActions, selectedItemIds: string[]) => void;
  updateOrderItemAmount: (orderItemId: string, amount: string) => void;
}

export const OrderDetail: React.FC<Props> = (props) => {
  const { orderItems, validationActions, updateOrderItemAmount } = props;
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleValidation = (type: vm.TypeValidationActions) => {
    validationActions(type, selectedItems);
    setSelectedItems([]);
  };

  const updateSelectedItems = (selectedItemIds: string[]) => {
    setSelectedItems(selectedItemIds);
  };

  const updateRow = (orderItem: vm.OrderDetail) => {
    updateOrderItemAmount(orderItem.id, orderItem.amount);
  };

  const handleProcessRowUpdateError = React.useCallback((error: Error) => {
    /*   setSnackbar({ children: error.message, severity: 'error' }); */
    console.log(error);
  }, []);

  return (
    <div className="order-detail-container">
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

      <div className="order-detail-table">
        <DataGrid
          columns={columns}
          rows={orderItems}
          hideFooterPagination
          hideFooter
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={updateSelectedItems}
          rowSelectionModel={selectedItems}
          onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
            if (params.reason === GridCellEditStopReasons.cellFocusOut) {
              event.defaultMuiPrevented = true;
            }
          }}
          processRowUpdate={(updatedRow:vm.OrderDetail) => {
            updateRow(updatedRow)
            return updatedRow;
          }}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
      </div>
    </div>
  );
};
