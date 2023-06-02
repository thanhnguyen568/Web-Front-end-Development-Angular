import {Category} from './category';

export interface Product {
  productCode?: string;
  productName?: string;
  productPrice?: number;
  productCreateDate?: Date;
  productWidth?: number;
  productLength?: number;
  productWeight?: number;
  productHeight?: number;
  productQuantity?: number;
  category?: Category;
  isSelected?: false;
}
