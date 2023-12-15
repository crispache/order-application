import { OrderDetail, OrderInfo } from "../Order.vm";

export const MOCK_ORDER_INFO: OrderInfo = {
    orderNumber: "ORD123456",
    supplier: "John Doe",
    date: '20/11/2023',
};


export const MOCK_ORDER_DETAIL: OrderDetail[] = [
    {
        id: 'ORD123',
        status: 'Válido',
        description: 'Reactivos maquinaria',
        amount: '2.345,00',
    },
    {
        id: 'ORD456',
        status: 'Pendiente',
        description: 'Recambios impresión',
        amount: '135,00',
    },
    {
        id: 'ORD789',
        status: 'Pendiente',
        description: 'Soportes plataformas',
        amount: '540,00',
    },
]