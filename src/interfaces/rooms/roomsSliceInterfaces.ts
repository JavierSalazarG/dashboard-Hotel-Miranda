import { RoomsInterface } from "./rooms";

export interface RoomsSliceInterface {
    data: RoomsInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}