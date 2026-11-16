'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// ... (biarkan kode fungsi lain di bawah ini jika file actions.ts sudah ada sebelumnya)

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}