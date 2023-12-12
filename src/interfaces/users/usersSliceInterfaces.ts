import { UsersInterface } from "./users";
export const statusOptions = <const>["fulfilled","rejected","idle","pending"];
export interface UsersSliceInterface {
    data: UsersInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}