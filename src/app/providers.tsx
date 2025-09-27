"use client";

import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { openBDTheme } from '@/lib/themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GeistProvider themes={[openBDTheme]} themeType="openBDTheme">
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}