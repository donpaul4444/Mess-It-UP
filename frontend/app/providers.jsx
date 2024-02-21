"use client"

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast";
import store from "@/Redux/store";

export default function Providers({children, themeProps}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider >
      <NextThemesProvider {...themeProps}>
       <Provider store={store}>
       {children}
        <Toaster/>
       </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}