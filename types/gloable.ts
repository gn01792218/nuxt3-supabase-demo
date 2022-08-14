export enum AuthState {
    LOGIN = 'login',
    SIGNUP = 'signup',
}
export enum DbTableName {
    AUTHNOTE = 'auth_note',
}
export interface Auth {
    email:string,
    password:string,
}
export interface AuthNote {
    id:number,
    title:string,
    note:string,
}
export interface AuthNoteInput {
    title:string,
    note:string,
}
export interface Nav {
    title:string,
    routeName:string,
    show:boolean,
    clickHandler?:Function,
}