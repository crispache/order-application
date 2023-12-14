
export interface OrderInfo {
    orderNumber: string;
    supplier: string;
    date: string;
    totalAmount: string;
    status: number;
}


export interface OrderDetail {
    id: string;
    isChecked: boolean;
    status: 'Válido' | 'Pendiente';
    description: string;
    amount: string;
}



export type TypeValidationActions = "validate" | "invalidate";