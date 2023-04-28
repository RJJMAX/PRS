import { Vendor } from "./vendor.class";

export class Product {
    id: number = 0;
    partNbr: string = "";
    name: string = "";
    price: number = 0;
    unit: string = "";
    photoPath: string = "";

    vendorId: number = 0;
    vendorName: string = "";
    vendor: Vendor | null = null;
}