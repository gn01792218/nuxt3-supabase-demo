export enum AuthState {
    LOGIN = 'login',
    SIGNUP = 'signup',
}
export interface Auth {
    email:string,
    password:string,
}
export interface Nav {
    title:string,
    routeName:string,
    show:boolean,
    clickHandler?:Function,
}