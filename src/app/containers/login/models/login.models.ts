export interface LoginData {
  email: string;
  password: string;
}

export enum LoginTypeEnum {
  SIGNUP = 'signup',
  SIGNIN = 'signin',
}
