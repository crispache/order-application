import React from "react";
import * as vm from "../../Order.vm";
import { OrderDetailValidationButtons } from "./OrderDetailValidationButtons.component";
import { OrderDetailTable } from "./OrderDetailTable.component";

interface Props {
  orderItems: vm.OrderDetail[];
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

  const updateSelectedItems = (orderItemsIds: string[]) => {
    setSelectedItems(orderItemsIds);
  };

  return (
    <div className="order-detail-container">
      <OrderDetailValidationButtons handleValidation={handleValidation} />

      <OrderDetailTable
        orderItems={orderItems}
        selectedItems={selectedItems}
        updateOrderItemAmount={updateOrderItemAmount}
        updateSelectedItems={updateSelectedItems}
      />
    </div>
  );
};
