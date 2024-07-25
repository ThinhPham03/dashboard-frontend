"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { authenticateLogin, logout as logoutApi } from '@/app/api/apiAccount';

const oneWeek = 24 * 60 * 60 * 7;

export const logout = async () => {
  logoutApi();
  cookies().delete('authToken');
  redirect('/');
}

export const signIn = async (formData: FormData) => {
  try {
    const token = await authenticateLogin(formData);

    cookies().set({
      name: 'authToken',
      value: token,
      httpOnly: true,
      path: '/',
      secure: true,
      maxAge: oneWeek,
      expires: new Date(Date.now() + oneWeek),
    })

    return true;
  } catch (error: any) {
    return false;
  }
}