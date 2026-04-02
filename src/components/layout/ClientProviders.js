'use client'

import { AuthProvider } from '@/lib/auth-context'

export default function ClientProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}
