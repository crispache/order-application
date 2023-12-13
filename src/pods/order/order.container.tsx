import React from "react";
import { Order } from "./order.component";
import { MOCK_ORDER } from "./mocks";


export const OrderContainer: React.FC = () => {
    return (
    <>
        <Order info={MOCK_ORDER} />
    </>)
}