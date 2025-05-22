import {a} from '../axiosInstance';

// const fs = require('fs');

const login = async (data: {
  email: string;
  password: string;
  expiresIn: string;
}) => {
  const response = await a.post('/api/auth/login', {
    email: data.email,
    password: data.password,
    token_expires_in: data.expiresIn,
  });
  return response.data;
};

const signup = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage?: string;
}) => {
  const formData = new FormData();
  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('password', data.password);
  // formData.append('profileImage', fs.createReadStream(data.profileImage));
  return await a.post('/api/auth/signup', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const otp = async (data: {email: string; otp: string}) =>
  await a.post('/api/auth/verify-otp', data);

const reOtp = async (data: {email: string}) =>
  await a.post('/api/auth/resend-verification-otp', data);

export {login, signup, otp, reOtp};
