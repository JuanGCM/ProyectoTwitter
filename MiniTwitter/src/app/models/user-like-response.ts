import { User } from './user';
import { Like } from './like';

export interface UserLikeResponse {
    id: number;
    mensaje: string;
    likes: Like[];
    user: User;
}