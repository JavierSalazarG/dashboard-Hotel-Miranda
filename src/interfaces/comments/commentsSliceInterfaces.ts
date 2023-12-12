import { CommentsInterface } from "./comments";
export const statusOptions = <const>["fulfilled","rejected","idle","pending"];
export interface CommentsSliceInterface {
    data: CommentsInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}