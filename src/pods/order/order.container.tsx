import React from "react";
import { Order } from "./order.component";
import { MOCK_ORDER_INFO, MOCK_ORDER_DETAIL } from "./mocks";


export const OrderContainer: React.FC = () => {
    return (
    <>
        <Order info={MOCK_ORDER_INFO} detail={MOCK_ORDER_DETAIL} />
    </>)
}