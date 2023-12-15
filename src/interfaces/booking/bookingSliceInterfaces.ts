import { BookingInterface } from "./booking";

export interface BookingSliceInterface {
    data: BookingInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}