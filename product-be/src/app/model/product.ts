import {Category} from './category';

export interface Product {
  id?: number;
  productCode?: string;
  productName?: string;
  productPrice?: number;
  productCreateDate?: string;
  productQuantity?: number;
  vat?: number;
  isSelected?: boolean;
  category?: Category;
}
