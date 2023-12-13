import React from "react";
import { OrderHeader } from "./components";
import { OrderInfo } from "./Order.vm";

interface Props {
  info: OrderInfo
}

export const Order: React.FC<Props> = (props) => {
  const { info } = props;
  
  return (
    <div className="order-container">
     <OrderHeader info={info} />
    </div>
  );
};
