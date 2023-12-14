import React from "react";
import { OrderDetail, OrderHeader } from "./components";
import { OrderReducer } from "./Order.reducer";
import * as vm from "./Order.vm";

interface Props {
  info: vm.OrderInfo;
  detail: Array<vm.OrderDetail>;
}

export const Order: React.FC<Props> = (props) => {
  const { info, detail } = props;
  const [orderItems, dispatch] = React.useReducer(OrderReducer, detail);

  const handleValidation = (
    type: vm.TypeValidationActions,
    orderItemsIds: string[]
  ) => {
    dispatch({
      type,
      payload: {
        orderItemsIds,
      },
    });
  };

  const updateOrderItemAmount = (orderItemId: string, amount: string) => {
    dispatch({
      type: "update-item-amount",
      payload: {
        orderItemsIds: [orderItemId],
        orderItemAmount: amount,
      },
    });
  };

  return (
    <div className="order-container">
      <OrderHeader info={info} orderItems={orderItems} />
      <OrderDetail
        orderItems={orderItems}
        validationActions={handleValidation}
        updateOrderItemAmount={updateOrderItemAmount}
      />
    </div>
  );
};
