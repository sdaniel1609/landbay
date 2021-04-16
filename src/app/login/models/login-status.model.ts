export interface LoginStatus {
  loginSuccess: boolean;
}
export enum LoginStatusMessageType {
  Success = 'Logged in successfully',
  IncorrectEmailPassword = 'Incorrect email address or password'
}
