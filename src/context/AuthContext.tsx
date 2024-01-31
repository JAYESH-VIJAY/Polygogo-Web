import { loginUser } from "@/api/mutation/auth";
import { NOT_FOUND, UNAUTHORIZED } from "http-status";
import jwt_decode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";
import Swal from "sweetalert2";

export interface AuthContextType {
  currentUser: any;
  handleLogin: (values: any) => Promise<boolean>;
  handleLogout: () => void;
  handleRegister: (values: any) => Promise<boolean>;
  handelCurrentUser: (values: any) => void;
}

export const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
 const loadingContext = useContext(LoadingContext);
 const { hideLoading, showLoading } = loadingContext;
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUserMutateAsync } = loginUser();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        showLoading();
        console.log(token);
        if (token) {
          const decoded: any = jwt_decode(token);
          const currentTime = new Date().getTime() / 1000;

          if (decoded?.exp && decoded.exp <= currentTime) {
            localStorage.removeItem("accessToken");
            setCurrentUser(null);
            navigate("/", { replace: true });
            console.log(localStorage.getItem("accessToken"));
          } else {
            setCurrentUser({ ...decoded, token });
          }
        }
      } finally {
        hideLoading();
      }
    };

    const init = async () => {
      showLoading();
      await checkToken();
      hideLoading();
    };

    init();
  }, [location, showLoading, hideLoading, navigate, loginUserMutateAsync]);

  const handleLogin = async (values: any): Promise<boolean> => {
    try {
      const response = await loginUserMutateAsync(values);

      if (
        response.statusCode === NOT_FOUND ||
        response.statusCode === UNAUTHORIZED
      ) {
        Swal.fire("Login", response.message, "warning");
        return false;
      }

      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/", { replace: true });
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const handleRegister = async ({ accessToken }: any): Promise<boolean> => {
    try {
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("accessToken");
  };

  const handelCurrentUser = (accessToken: any) => {
    setCurrentUser(accessToken);
  };

  const authContextValue: AuthContextType = {
    currentUser,
    handleLogin,
    handleRegister,
    handelCurrentUser,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  handleLogin: () => Promise.resolve(false),
  handleLogout: () => {},
  handleRegister: () => Promise.resolve(false),
  handelCurrentUser: () => {},
});
