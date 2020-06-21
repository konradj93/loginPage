export interface LoginInterface {
    email: string;
    password: string;
}

export interface UserContextInterface {
    isAuth: boolean;
    setAuth(auth:boolean): void;
}