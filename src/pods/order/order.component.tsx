import React from "react";
import { OrderDetail, OrderHeader } from "./components";
import * as vm from "./Order.vm";

interface OrderActionsReducer {
  type: "validate" | "invalidate";
  payload?: string;
}

const OrderReducer = (state: vm.OrderDetail[], action: OrderActionsReducer): Array<vm.OrderDetail> => {
  switch (action.type) {
    case "validate":
      return state.map((orderItem) => {
        if (orderItem.id === action.payload) {
          return {
            ...orderItem,
            isChecked: true,
            status: "Válido",
          };
        }
        return orderItem;
      });
    case "invalidate":
      return state.map((orderItem) => {
        if (orderItem.id !== action.payload) {
          return {
            ...orderItem,
            isChecked: false,
            status: "Pendiente",
          };
        }
        return orderItem;
      });
    default:
      return state;
  }
};

interface Props {
  info: vm.OrderInfo;
  detail: Array<vm.OrderDetail>;
}

export const Order: React.FC<Props> = (props) => {
  const { info, detail } = props;
  const [orderItems, dispatch] = React.useReducer(OrderReducer, detail);

  const validate = (itemsIDS: Array<string>) => {
    itemsIDS.map( (id) => {
      dispatch({ type: "validate", payload: id});
    })
  };


  const invalidate = (itemsIDS: Array<string>) => {
    itemsIDS.map( (id) => {
      dispatch({ type: "invalidate", payload: id});
    })
  };


  React.useEffect(() => {
    console.log('AHORA', orderItems)

  }, [orderItems])
  

  return (
    <div className="order-container">
      <OrderHeader info={info} />
      <OrderDetail orderItems={orderItems} validate={validate}  invalidate={invalidate}/>
    </div>
  );
};
