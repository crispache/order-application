import { OrderDetail } from "./Order.vm";

type TypeOrderActionsReducer = "validate" | "invalidate" | "update-item-amount";

export interface OrderActionsReducer {
    type: TypeOrderActionsReducer;
    payload?: {
      orderItemsIds: String[],
      orderItemAmount?: string,
    };
  }
  
export const OrderReducer = (state: OrderDetail[], action: OrderActionsReducer): Array<OrderDetail> => {
    switch (action.type) {
      case "validate":
        return state.map((orderItem) => {
          if (action.payload.orderItemsIds.includes(orderItem.id)) {
            return {
              ...orderItem,
              status: "Válido",
            };
          }
          return orderItem;
        });
      case "invalidate":
        return state.map((orderItem) => {
          if ((action.payload.orderItemsIds.includes(orderItem.id))) {
            return {
              ...orderItem,
              status: "Pendiente",
            };
          }
          return orderItem;
        });
        case "update-item-amount":
          return state.map((orderItem) => {
            if ((action.payload.orderItemsIds.includes(orderItem.id))) {
              return {
                ...orderItem,
                amount: action.payload.orderItemAmount,
              };
            }
            return orderItem;
          });
      default:
        return state;
    }
  };