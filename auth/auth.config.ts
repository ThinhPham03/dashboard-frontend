import type { NextAuthConfig } from 'next-auth';
import { authenticateToken } from '@/app/api/apiAccount';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async authorized({ request }) {
      let isLoggedIn = false;
      const { accountId, role } = await authenticateToken();

      if (accountId) {
        isLoggedIn = true;
      }
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      const isOnEditProduct = (request.nextUrl.pathname.startsWith('/dashboard/products') && request.nextUrl.pathname.endsWith('/edit'));
      const isOnCreateProduct = request.nextUrl.pathname.endsWith('/products/create');
      const isOnChangePassword = request.nextUrl.pathname.startsWith('/change-password');
      const isOnAccount = request.nextUrl.pathname.endsWith('/accounts');

      if (isOnDashboard) {
        if (isLoggedIn) {
          if (isOnCreateProduct || isOnEditProduct) {
            if (role === "line4") return true;
            return Response.redirect(new URL('/dashboard/products', request.nextUrl));
          }
          if (isOnAccount) {
            if (role !== "line1") return true;
            return Response.redirect(new URL('/dashboard', request.nextUrl));
          }
          return true;
        };
        return Response.redirect(new URL('/', request.nextUrl));
      } else if (isOnChangePassword) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/', request.nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;