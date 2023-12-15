import { CommentsInterface } from "./comments";

export interface CommentsSliceInterface {
    data: CommentsInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}