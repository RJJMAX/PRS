import { Vendor } from "./vendor.class";

export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "Each";
    photoPath: string = "";

    vendorId: number = 0;
    vendor: Vendor | null = null;
  
 
}