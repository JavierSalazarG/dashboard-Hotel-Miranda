import { UsersInterface } from "./users";

export interface UsersSliceInterface {
    data: UsersInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}