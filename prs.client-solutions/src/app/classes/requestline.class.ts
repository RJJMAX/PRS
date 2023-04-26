import { Product } from "./product.class";

export class Requestline {
id: number = 0;
quantity: number = 0;

requestId: number = 0;
request: Request | null = null;

productId: number = 0;
product: Product | null = null;
}