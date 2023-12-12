import { BookingInterface } from "./booking";
export const statusOptions = <const>["fulfilled","rejected","idle","pending"];
export interface BookingSliceInterface {
    data: BookingInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}