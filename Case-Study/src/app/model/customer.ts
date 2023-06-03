import {Type} from './type';

export interface Customer {
  customerId?: number;
  customerName?: string;
  customerDateOfBirth?: string;
  customerIdCard?: string;
  customerPhone?: number;
  customerEmail?: string;
  customerAddress?: string;
  customerType?: Type;
}
