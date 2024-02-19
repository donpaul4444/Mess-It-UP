"use client"

import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Providers({children, themeProps}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider >
      <NextThemesProvider {...themeProps}>

       {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}