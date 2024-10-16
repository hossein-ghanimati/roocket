import { getUser } from "@/assets/ts/utils/auth";
import { removeFromLocal, setToSession } from "@/assets/ts/utils/browserMemo";
import { UserType } from "@/assets/types/share/user.type";
import {
  FC,
  PropsWithChildren,
  createContext,
  memo,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isLogin: boolean;
  user: UserType | null;
  getMe : () => void;
  logout : () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: FC<PropsWithChildren> = memo(({ children }) => {
  const [user, setUser] = useState<null | UserType>(null);
  const [isLogin, setIsLogin] = useState(false);

  const getMe = async () => {
    const result = await getUser();
    
    setToSession("user", result.user)
    setUser(result.user);
    setIsLogin(result.isLogin);
  };

  const logout = () => {
    removeFromLocal("token")
    getMe()
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, user, getMe, logout }}>
      {children}
    </AuthContext.Provider>
  );
});

export { AuthContext, AuthContextProvider };
