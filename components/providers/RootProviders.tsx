'use client'

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const RootProviders = ({children} : {children: ReactNode}) => {
  return (
    <ThemeProvider 
      attribute="class"
      enableSystem
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default RootProviders