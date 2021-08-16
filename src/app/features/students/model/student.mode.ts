export interface Student {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  cpf: string;
  paymentDetail: number;
  delayMonthPayment: number;
  aditionalRate: number;
  graduation: string;
  observation: string;
  isActivate: boolean;
  paymentInDay: boolean;
  startDate: Date | string;
  createdAt: Date | string;
  alteredAt: Date | string;
}
