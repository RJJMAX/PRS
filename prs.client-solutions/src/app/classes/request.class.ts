import { Requestline } from "./requestline.class";
import { User } from "./user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "PICKUP";
    status: string = "NEW";
    total: number = 0;

    userId: number = 0;
    user: User | null = null;

    requestLines: Requestline[] = [];


}