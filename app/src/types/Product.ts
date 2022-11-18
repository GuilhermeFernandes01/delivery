export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<{
    _id: string;
    name: string;
    icon: string;
  }>;
}
