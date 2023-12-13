import { OrderDetail } from "./Order.vm";

export interface OrderActionsReducer {
    type: "validate" | "invalidate";
    payload?: Array<string>;
  }
  
export const OrderReducer = (state: OrderDetail[], action: OrderActionsReducer): Array<OrderDetail> => {
    switch (action.type) {
      case "validate":
        return state.map((orderItem) => {
          if (action.payload.includes(orderItem.id)) {
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
          if ((action.payload.includes(orderItem.id))) {
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