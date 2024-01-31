import { useQuery } from "@tanstack/react-query";
import { poster } from "../poster";
import { useNavigate } from "react-router-dom";

export const getUserInfo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  if (!token) {
    navigate("/auth/login", { replace: true });
  }

  const {
    data: userInfoData,
    refetch: userInfoRefetch,
    isLoading: userInfoLoading,
  } = useQuery(
    ["getUserInfo"],
    async () =>
      await poster({
        url: `/auth/users/info`,
        method: "GET",
        authToken: token,
      })
  );

  return {
    userInfoData,
    userInfoRefetch,
    userInfoLoading,
  };
};
