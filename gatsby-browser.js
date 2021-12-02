import React from "react"
import { ToastProvider } from "react-toast-notifications"
import { AccountProvider } from "./src/context/account"
import { CacheProvider } from "./src/context/cache"
import { ThemeProvider as Provider } from "./src/theme"

export const wrapPageElement = ({ element }) => {
  return (
    <CacheProvider>
      <AccountProvider>
        <ToastProvider autoDismiss={true} placement="bottom-left">
          <Provider>{element}</Provider>
        </ToastProvider>
      </AccountProvider>
    </CacheProvider>
  )
}
