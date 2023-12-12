import { RoomsInterface } from "./rooms";
export const statusOptions = <const>["fulfilled","rejected","idle","pending"];
export interface RoomsSliceInterface {
    data: RoomsInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}