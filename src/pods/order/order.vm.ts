
export interface OrderInfo {
    orderNumber: string;
    supplier: string;
    date: string;
}


export interface OrderDetail {
    id: string;
    status: 'Válido' | 'Pendiente';
    description: string;
    amount: string;
}



export type TypeValidationActions = "validate" | "invalidate";