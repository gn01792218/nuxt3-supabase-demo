export enum AuthState {
    LOGIN = 'login',
    SIGNUP = 'signup',
}
export interface Auth {
    email:string,
    password:string,
}