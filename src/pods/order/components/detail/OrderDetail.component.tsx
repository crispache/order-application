import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import * as vm from "../../Order.vm";
import { columns } from "./colums.data";

type typeValidation = 'validate' | 'invalidate';
interface Props {
  orderItems: Array<vm.OrderDetail>;
  validationActions: (type: typeValidation, selectedItemIds: string[]) => void;
}

export const OrderDetail: React.FC<Props> = (props) => {
  const { orderItems, validationActions } = props;
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleValidation = (type: typeValidation) => {
    validationActions(type, selectedItems);
    setSelectedItems([]);
  }

  const updateSelectedItems = (selectedItemIds: string[]) => {
    setSelectedItems(selectedItemIds)
  }


  return (
    <div className="order-detail-container">

      <div className="order-detail-buttons">
        <Button variant="contained" color="success" onClick={() => handleValidation('validate')}>Validar</Button>
        <Button variant="contained" color="error" onClick={() => handleValidation('invalidate')}>Invalidar</Button>
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
        />
      </div>
    </div>
  );
};
