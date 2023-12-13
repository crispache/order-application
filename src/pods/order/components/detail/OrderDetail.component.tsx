import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import * as vm from "../../Order.vm";
import { columns } from "./colums.data";


interface Props {
  orderItems: Array<vm.OrderDetail>;
  validate: (itemsIDS: string[]) => void;
  invalidate: (itemsIDS: string[]) => void;
}

export const OrderDetail: React.FC<Props> = (props) => {
  const { orderItems,validate, invalidate } = props;

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const validateItems = () => {
    validate(selectedItems);
    emtpySelectedItems()
  }

  const invalidateItems = () => {
    invalidate(selectedItems);
    emtpySelectedItems()
  }

  const updateItems = (items: string[]) => {
    setSelectedItems(items)
  }


  const emtpySelectedItems = () => {
    setSelectedItems([]);
  }

  return (
    <div className="order-detail-container">

      <div className="order-detail-buttons">
        <Button variant="contained" color="success" onClick={validateItems}>Validar</Button>
        <Button variant="contained" color="error" onClick={invalidateItems}>Invalidar</Button>
      </div>

      <div className="order-detail-table">
        <DataGrid
          columns={columns}
          rows={orderItems}
          hideFooterPagination
          hideFooter
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={updateItems}
          rowSelectionModel={selectedItems}
        />
      </div>
    </div>
  );
};
