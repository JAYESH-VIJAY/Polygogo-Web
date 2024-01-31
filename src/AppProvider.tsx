import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthContextProvider } from "./context/AuthContext";
import LoadingContextProvider from "./context/LoadingContext";
import { isDevelopment } from "./constant/constant";
function AppProvider({ children }: ReactElement | ReactNode | any) {
  const queryClient = new QueryClient();

  return (
    <GoogleOAuthProvider clientId="261988227007-8uq5gjid8s32ohpofsho2p2hqiqenj34.apps.googleusercontent.com">
      <BrowserRouter>
        <LoadingContextProvider>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      optionSelectedBg: "#3787ff",
                      optionSelectedColor: "white",
                      borderRadiusSM: 999,
                    },
                    Pagination: {
                      itemActiveBg: "#E5E8E5",
                      colorPrimaryBorder: "transparent",
                      colorBorder: "black",
                      // colorPrimary: "transparent",
                    },
                  },
                  token: {},
                }}
              >
                <StyleProvider hashPriority="high">{children}</StyleProvider>
              </ConfigProvider>
              {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
            </AuthContextProvider>
          </QueryClientProvider>
        </LoadingContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default AppProvider;
