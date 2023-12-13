import React from "react";
import { Order } from "./order.component";
import { MOCK_ORDER, MOCK_ORDER_DETAIL } from "./mocks";


export const OrderContainer: React.FC = () => {
    return (
    <>
        <Order info={MOCK_ORDER} detail={MOCK_ORDER_DETAIL} />
    </>)
}