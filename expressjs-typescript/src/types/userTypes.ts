export interface UserResponseBody{
    name: string;
    email: string;
    age?: number
}
export interface UserResponse{
    message: string;
    user?:{
        name: string;
        email: string;
        age?: number
    }
}