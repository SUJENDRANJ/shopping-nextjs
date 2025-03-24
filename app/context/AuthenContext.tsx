"use client";

import { SessionProvider } from "next-auth/react";

const AuthenProvider = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthenProvider;
