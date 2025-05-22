type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  OTP: {email: string; password: string};
};

export type {AuthStackParamList};
