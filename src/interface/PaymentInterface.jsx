export interface PaymentInterface {
    id: number,
    amount: number,
    currency: string,
    status: "pay" | "not_pay" | "returned",
    variant: string
}