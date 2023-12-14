import React from "react";
import { OrderDetail, OrderHeader } from "./components";
import { OrderReducer } from "./Order.reducer";
import * as vm from "./Order.vm";

interface Props {
  info: vm.OrderInfo;
  detail: Array<vm.OrderDetail>;
}

type typeValidation = 'validate' | 'invalidate';

export const Order: React.FC<Props> = (props) => {
  const { info, detail } = props;
  const [orderItems, dispatch] = React.useReducer(OrderReducer, detail);

  const handleValidation = (type: typeValidation, selectedItemIds: string[]) => {
      dispatch({ type, payload: selectedItemIds});
  };

  return (
    <div className="order-container">
      <OrderHeader info={info} orderItems={orderItems}/>
      <OrderDetail orderItems={orderItems} validationActions={handleValidation} />
    </div>
  );
};
