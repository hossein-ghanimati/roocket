import { FC, PropsWithChildren, createContext, memo, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  changToDark: () => void;
  changToLight: () => void;
  toggleTheme: () => void;
  
}

const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeContextProvider: FC<PropsWithChildren> = memo(({children}) => {

  const [isDark, setIsDark] = useState(false)
  
  const changToDark = () => setIsDark(true)

  const changToLight = () => setIsDark(false)

  const toggleTheme = () => setIsDark(!isDark)

  const ThemeContextValue = {
    isDark,
    changToDark,
    changToLight,
    toggleTheme
  }

  return <ThemeContext.Provider value={ThemeContextValue}>
    {children}
  </ThemeContext.Provider>
})

export {
  ThemeContext,
  ThemeContextProvider
}