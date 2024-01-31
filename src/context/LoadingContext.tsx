import Loading from "@/components/Loading";
import { notification } from "antd";
import { createContext, useState } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

export interface LoadingContextType {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

function LoadingContextProvider({ children }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [api] = notification.useNotification();

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  const loadingContextValue: LoadingContextType = {
    isLoading,
    showLoading,
    hideLoading,
  };

  return (
    <LoadingContext.Provider value={loadingContextValue}>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-transparent">
          <Loading />
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;
