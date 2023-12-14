import { OrderDetail, OrderInfo } from "../Order.vm";

export const MOCK_ORDER: OrderInfo = {
    orderNumber: "ORD123456",
    supplier: "John Doe",
    date: '20/11/2023',
    totalAmount: null,
    status: 0,
};


export const MOCK_ORDER_DETAIL: OrderDetail[] = [
    {
        id: 'ORD123',
        isChecked: true,
        status: 'Válido',
        description: 'Reactivos maquinaria',
        amount: '2.345,00',
    },
    {
        id: 'ORD456',
        isChecked: false,
        status: 'Pendiente',
        description: 'Recambios impresión',
        amount: '135,00',
    },
    {
        id: 'ORD789',
        isChecked: false,
        status: 'Pendiente',
        description: 'Soportes plataformas',
        amount: '540,00',
    },
]