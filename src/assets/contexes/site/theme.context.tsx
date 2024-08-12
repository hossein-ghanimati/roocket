import { getFromLocal, setToLocal } from "@/assets/ts/utils/browserMemo";
import { FC, PropsWithChildren, createContext, memo, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  changToDark: () => void;
  changToLight: () => void;
  toggleTheme: () => void;
  
}

const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeContextProvider: FC<PropsWithChildren> = memo(({children}) => {
  const initTheme = getFromLocal("theme") === "dark" ? true : false;
  console.log("init theme", getFromLocal("theme"));
  

  const [isDark, setIsDark] = useState(initTheme)
  
  const changToDark = () => {
    setIsDark(true)
    setToLocal("theme", "dark")
  }

  const changToLight = () => {
    setIsDark(false)
    setToLocal("theme", "light")
  }

  const toggleTheme = () => {
    setToLocal("theme", isDark ? "light" : "dark")
    setIsDark(!isDark)
  }

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