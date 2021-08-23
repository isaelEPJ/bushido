export interface HomePromotion {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  old_price: number;
  new_price: number;
  imageUrl: string;
}
