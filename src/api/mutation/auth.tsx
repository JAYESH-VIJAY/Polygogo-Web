import { MutationOptions, useMutation } from "@tanstack/react-query";
import { poster } from "../poster";
type HttpMethod = "POST" | "PUT" | "DELETE" | "GET";
interface ApiMutationOptions extends MutationOptions<any, Error, any, any> {
  url: string;
  method: HttpMethod;
}

const useApiMutation = (
  url: string,
  key: any,
  method: HttpMethod,
  options?: ApiMutationOptions
) => {
  return useMutation(
    key,
    async (bodyData: any) => {
      try {
        const response = await poster({ url, method, bodyData });
        return response;
      } catch (error) {
        console.error(`Error in ${key} mutation:`, error);
        throw error;
      }
    },
    options
  );
};

const googleUserInfo = () => {
  const {
    data: googleData,
    mutateAsync: googleMutateAsync,
    isLoading: googleLoading,
  } = useMutation(
    ["googleUserInfo"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/google/getInfo`,
        method: "POST",
        bodyData,
      })
  );
  return {
    googleMutateAsync,
    googleLoading,
    googleData,
  };
};
const linkedinUserInfo = () => {
  const {
    data: linkedinData,
    mutateAsync: linkedinMutateAsync,
    isLoading: linkedinLoading,
  } = useMutation(
    ["linkedinUserInfo"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/linkedin/getInfo`,
        method: "POST",
        bodyData,
      })
  );
  return {
    linkedinMutateAsync,
    linkedinData,
    linkedinLoading,
  };
};

const loginUser = () => {
  const {
    data: userData,
    mutateAsync: loginUserMutateAsync,
    isLoading: userLoading,
  } = useMutation(
    ["loginUser"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/login`,
        method: "POST",
        bodyData,
      })
  );
  return {
    loginUserMutateAsync,
    userData,
    userLoading,
  };
};
const checkUserStatus = () => {
  const {
    data: userStatusData,
    mutateAsync: userStatusMutateAsync,
    isLoading: userStatusLoading,
  } = useMutation(
    ["checkUserStatus"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/check-user`,
        method: "POST",
        bodyData,
      })
  );
  return {
    userStatusData,
    userStatusMutateAsync,
    userStatusLoading,
  };
};

const createAccount = () => {
  const {
    data: userData,
    mutateAsync: createAccountMutateAsync,
    isLoading: userLoading,
  } = useMutation(
    ["createAccount"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/register`,
        method: "POST",
        bodyData,
      })
  );
  return {
    createAccountMutateAsync,
    userData,
    userLoading,
  };
};
const sendOtp = () => {
  const {
    data: otpData,
    mutateAsync: sendOtpMutateAsync,
    isLoading: otpLoading,
  } = useMutation(
    ["sendOtp"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/send-otp`,
        method: "POST",
        bodyData,
      })
  );
  return {
    sendOtpMutateAsync,
    otpData,
    otpLoading,
  };
};
const sendRegisterOtp = () => {
  const {
    data: otpData,
    mutateAsync: sendOtpMutateAsync,
    isLoading: otpLoading,
  } = useMutation(
    ["sendRegisterOtp"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/send-otp-register`,
        method: "POST",
        bodyData,
      })
  );
  return {
    sendOtpMutateAsync,
    otpData,
    otpLoading,
  };
};
const verifyOtp = () => {
  const {
    data: otpVerificationData,
    mutateAsync: otpVerificationMutateAsync,
    isLoading: otpVerificationLoading,
  } = useMutation(
    ["verifyOtp"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/verify-otp`,
        method: "POST",
        bodyData,
      })
  );
  return {
    otpVerificationLoading,
    otpVerificationMutateAsync,
    otpVerificationData,
  };
};
const resetPassword = () => {
  const {
    data: resetPasswordData,
    mutateAsync: resetPasswordMutateAsync,
    isLoading: resetPasswordLoading,
  } = useMutation(
    ["resetPassword"],
    async (bodyData: any) =>
      await poster({
        url: `/auth/reset-password`,
        method: "POST",
        bodyData,
      })
  );
  return {
    resetPasswordMutateAsync,
    resetPasswordLoading,
    resetPasswordData,
  };
};

const useGoogleUserInfo = () =>
  useApiMutation("/auth/google/getInfo", "googleUserInfo", "POST");
const useLinkedinUserInfo = () =>
  useApiMutation("/auth/linkedin/getInfo", "linkedinUserInfo", "POST");
const useLoginUser = () => useApiMutation("/auth/login", "loginUser", "POST");
const useCheckUserStatus = () =>
  useApiMutation("/auth/check-user", "checkUserStatus", "POST");
const useCreateAccount = () =>
  useApiMutation("/auth/register", "createAccount", "POST");
const useSendOtp = () => useApiMutation("/auth/send-otp", "sendOtp", "POST");
const useSendRegisterOtp = () =>
  useApiMutation("/auth/send-otp-register", "sendRegisterOtp", "POST");
const useVerifyOtp = () =>
  useApiMutation("/auth/verify-otp", "verifyOtp", "POST");
const useResetPassword = () =>
  useApiMutation("/auth/reset-password", "resetPassword", "POST");

export {
  googleUserInfo,
  createAccount,
  loginUser,
  linkedinUserInfo,
  verifyOtp,
  sendOtp,
  resetPassword,
  checkUserStatus,
  sendRegisterOtp,
};
