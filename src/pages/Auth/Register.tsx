import PgDone from "@/assets/dashboard/PgDone";
import InputField from "@/components/Input/InputField";
import PgButton from "@/components/Input/PgButton";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useCallback, useContext, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
// import { Country, City } from "country-state-city";
// import { getStatesOfCountry } from "country-state-city/lib/state";

import {
  checkUserStatus,
  createAccount,
  googleUserInfo,
  linkedinUserInfo,
  sendRegisterOtp,
} from "@/api/mutation/auth";
import * as Yup from "yup";
import { FOUND, NOT_FOUND, OK } from "http-status";
import PasswordField from "@/components/Input/PasswordField";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import PgSocialButton from "@/components/Input/PgSocialButton";
import { AuthContext } from "@/context/AuthContext";
import { Checkbox } from "antd";
import Swal from "sweetalert2";
import OnboardSelectField from "@/components/Input/OnboardSelectField";
import PgLogoDark from "@/assets/dashboard/PgLogoDark";

export function Register() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("popstate", () => {
      console.log("Back button clicked!");
      if (step == 0) {
        navigate("/auth/register");
      }
      if (step == 1) {
        setStep(0);
      }
      if (step == 2) {
        setStep(1);
      }
      // Add additional logic here
    });
    // return () => {
    //   window.removeEventListener("popstate", () => {});
    // };
  }, [step]);
  console.log(step);
  const [value, setValue] = useState("");
  const lastStep = 2;
  const TIMER = step == 1 ? 60 : 0;
  const [countdown, setCountdown] = useState(TIMER);
  const { otpData, otpLoading, sendOtpMutateAsync } = sendRegisterOtp();
  const [userInfo, setUserInfo] = useState<any>(null);
  const { handleRegister, handelCurrentUser } = useContext(AuthContext);
  const { googleMutateAsync, googleLoading } = googleUserInfo();
  const { linkedinMutateAsync, linkedinLoading } = linkedinUserInfo();
  const { createAccountMutateAsync } = createAccount();
  const { userStatusMutateAsync, userStatusLoading } = checkUserStatus();
  const googleRegister = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const user = await googleMutateAsync({
          access_token: codeResponse?.access_token,
        });
        const data = await userStatusMutateAsync(user?.data);

        if (data.statusCode == NOT_FOUND) {
          setUserInfo(user?.data);
          setStep(2);
        }

        if (data.statusCode == OK) {
          Swal.fire("Register", data.message, "warning");
        }
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  useEffect(() => {
    // Create a function to decrement the countdown timer
    const decrementCountdown = () => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    };

    // Start the countdown only when transitioning from step 0 to step 1
    if (step === 1) {
      const countdownInterval = setInterval(decrementCountdown, 1000);

      // Clear the interval when the component unmounts or when countdown reaches 0
      return () => {
        clearInterval(countdownInterval);
      };
    }

    // Reset the countdown when transitioning from other steps to step 1
    if (step === 1 && countdown === 0) {
      setCountdown(TIMER);
    }
  }, [countdown, step, TIMER]);

  const { linkedInLogin: linkedInRegister } = useLinkedIn({
    clientId: "86sp6f3j2getp8",
    redirectUri: `${window.origin}/linkedin`,
    scope: "openid profile email",
    onSuccess: async (code) => {
      const user = await linkedinMutateAsync({
        code: code,
        redirectUri: `${window.origin}/linkedin`,
      });

      const data = await userStatusMutateAsync(user?.data);

      if (data.statusCode == NOT_FOUND) {
        setUserInfo(user?.data);
        setStep(2);
      }

      if (data.statusCode == OK) {
        // alert(data.message);
        Swal.fire("Register", data.message, "success");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // const countries = Country.getAllCountries();

  // const updatedCountries = useMemo(
  //   () =>
  //     countries.map((country) => ({
  //       label: country.name,
  //       value: country.isoCode,
  //       ...country,
  //     })),
  //   [countries]
  // );

  // const updatedStates = (countryId) => {
  //   return getStatesOfCountry(countryId).map((state) => ({
  //     label: state.name,
  //     value: state.isoCode,
  //     ...state,
  //   }));
  // };
  // const updatedCities = (countryId, stateId) => {
  //   return City.getCitiesOfState(countryId, stateId).map((city) => ({
  //     label: city.name,
  //     value: city.name,
  //     ...city,
  //   }));
  // };

  const validationSchema = [
    Yup.object().shape({
      fullName: Yup.string()
        .matches(/^[a-zA-Z ]+$/, "Name can only contain letters")
        .trim()
        .required("Name is required"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address"),
      password: Yup.string()
        .test(
          "password",
          "Password should have 8 or more characters, including at least one lowercase letter, one uppercase letter, and one symbol.",
          (value) => {
            if (!value) {
              return false; // Password is required
            }
            const passwordRegex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
            return passwordRegex.test(value);
          }
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("Confirm Password is required"),
      isTermsEnabled: Yup.boolean()
        .test(
          "isTermsEnabled",
          "Please accept the Polygogo Terms of Service before continuing.",
          (value) => value === true
        )
        .required(
          "Please accept the Polygogo Terms of Service before continuing."
        ),
    }),
    Yup.object().shape({
      otp: Yup.string()
        .required("Code is required")
        .matches(/^[0-9]*$/, "Code must be numeric")
        .test("is-valid-otp", "Invalid Code", (value) => {
          console.log("Validating OTP:", value);
          const expectedOTP = otpData?.data?.otp;
          console.log("Expected OTP:", expectedOTP);
          return value === expectedOTP;
        }),
    }),
    Yup.object().shape({
      companyName: Yup.string()
        .trim()
        .matches(
          /^[a-zA-Z0-9 ]*$/,
          "Company name must not contain special characters"
        )
        .max(50, "Company name must not exceed 50 characters.")
        .required("Company is required"),

      designation: Yup.string()
        .trim()
        .max(50, "Designation must not exceed 50 characters.")
        .matches(
          /^[a-zA-Z0-9 ]*$/,
          "Designation must not contain special characters."
        )
        .required("Designation  is required"),
      address: Yup.string()
        .trim()
        .max(250, "Address must not exceed 250 characters.")
        .required("Address  is required"),
      building: Yup.string(),
      city: Yup.string().trim().required("City is required"),
      state: Yup.string().trim().required("State is required"),
      country: Yup.string().trim().required("Country is required"),
      pinCode: Yup.string()
        .trim()
        .matches(/^\d{5,6}$/, "Invalid Zip Code")
        .required("Zip Code is required"),
    }),
    Yup.object().shape({}),
  ];

  const _submitForm = useCallback(
    async (values: any, actions: any) => {
      try {
        const data = await createAccountMutateAsync(values);

        if (data.statusCode === OK) {
          setStep(step + 1);
        }

        if (data.statusCode === FOUND) {
          // alert(data.message);
          Swal.fire("Register", data.message, "warning");
          navigate("/auth/login", { replace: true });
        }

        handleRegister({
          accessToken: data?.data?.accessToken,
        });
      } catch (error) {
        console.error("Registration failed:", error);
        // Handle error, e.g., display an error message to the user
      } finally {
        actions.setSubmitting(false);
      }
    },
    [createAccountMutateAsync, setStep, navigate, handleRegister, step]
  );

  const _handleSubmitForm = useCallback(
    async (values: any, actions: any) => {
      actions.setSubmitting(true);
      if (lastStep === step) {
        await _submitForm(values, actions);
      } else {
        if (step == 0) {
          const data = await sendOtpMutateAsync({
            email: values.email,
          });
          if (data?.status) {
            setStep(step + 1);
          } else {
            // alert(data?.message);
            Swal.fire("Register", data.message, "warning");
          }
        }
        if (step == 1) {
          const data = await userStatusMutateAsync(values);

          if (data.statusCode === NOT_FOUND) {
            setStep(step + 1);
          }

          if (data.statusCode === OK) {
            // alert(data.message);
            Swal.fire("Register", data.message, "success");
          }
        }
        actions.setSubmitting(false);
      }
    },
    [step, _submitForm, sendOtpMutateAsync, userStatusMutateAsync]
  );
  console.log(value);
  return (
    <div className=" md:mx-6 md:p-12 md:py-16 px-4 pt-4 pb-8">
      <Formik
        enableReinitialize
        initialValues={{
          fullName: userInfo?.fullName ?? "",
          email: userInfo?.email ?? "",
          password: "",
          confirmPassword: "",
          companyName: "",
          designation: "",
          address: "",
          building: "",
          city: null,
          state: null,
          country: null,
          pinCode: "",
          isTermsEnabled: "",
          loginType: userInfo?.loginType ?? "NORMAL",
          otp: "",
        }}
        validationSchema={validationSchema[step]}
        onSubmit={_handleSubmitForm}
      >
        {({ handleSubmit, isSubmitting, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <div className="md:hidden flex justify-center mt-8">
              <PgLogoDark />
            </div>
            <div className="flex flex-col mb-2">
              {step == 0 && (
                <>
                  <div className="py-6 text-left ">
                    <div className="flex pb-4 justify-center md:justify-start items-center ">
                      <div
                        className="text-md text-sm flex items-center gap-1 font-medium mr-1 
            text-[#3787FF] border-none"
                      >
                        Step {step + 1} of 3
                      </div>
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.70898 14.5L10.084 15.8125L15.6484 10.501L10.084 5.18945L8.70898 6.50195L12.8984 10.501L8.70898 14.5Z"
                          fill="#3787FF"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-2xl text-center md:text-left md:text-3xl font-semibold text-primaryDark">
                      Welcome to Polygogo!
                    </h4>
                    <p className="text-sm text-gray-400  text-center md:text-left">
                      Please enter your detail and Register Now.
                    </p>
                  </div>
                  <>
                    <div className="flex flex-col gap-0">
                      <InputField
                        name="fullName"
                        placeholder="Your Full Name"
                        asterisk="*"
                      />
                      <InputField
                        name="email"
                        placeholder="Email address"
                        asterisk="*"
                        pass="new-email"
                      />
                      <PasswordField
                        name="password"
                        placeholder="Password"
                        asterisk="*"
                        pass="new-password"
                      />
                      <PasswordField
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        asterisk="*"
                      />
                    </div>
                    <div>
                      <div className="flex items-start justify-between text-xs text-gray-400 cursor-pointer gap-x-2">
                        <Checkbox
                          disabled={userStatusLoading}
                          onChange={(e: any) => {
                            setFieldValue("isTermsEnabled", e?.target?.checked);
                          }}
                        />
                        <div className="mt-[2px]">
                          Yes, I understand and agree to the&nbsp;
                          <span className="text-[#0BA5EC]">
                            <Link target="_blank" to="/company/terms">
                              Polygogo Terms of Service
                            </Link>
                          </span>{" "}
                          including the{" "}
                          <span className="text-[#0BA5EC]">
                            <Link target="_blank" to="/company/agreement">
                              User Agreement
                            </Link>
                          </span>{" "}
                          and{" "}
                          <span className="text-[#0BA5EC]">
                            <Link target="_blank" to="/company/privacy">
                              Privacy Policy
                            </Link>
                          </span>
                          .
                        </div>
                      </div>

                      <div className="text-xs text-red-500 ml-6">
                        <ErrorMessage
                          name={"isTermsEnabled"}
                          component={"div"}
                        />
                      </div>
                    </div>
                  </>
                </>
              )}

              {step == 1 && (
                <>
                  <div className="py-6  ">
                    <div className="flex pb-4 justify-center md:justify-start items-center ">
                      <div
                        className="text-md text-sm flex items-center gap-1 font-medium mr-1 
            text-[#3787FF] border-none"
                      >
                        Step {step + 1} of 3
                      </div>
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.70898 14.5L10.084 15.8125L15.6484 10.501L10.084 5.18945L8.70898 6.50195L12.8984 10.501L8.70898 14.5Z"
                          fill="#3787FF"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-3xl font-semibold text-primaryDark">
                      Enter Code
                    </h4>
                    <p className="text-sm text-gray-400">
                      Please enter 4 digit code sent to your email
                    </p>
                  </div>

                  <div className="flex flex-col mb-2">
                    <Field name="otp">
                      {({ field, meta }) => (
                        <div>
                          <input
                            {...field}
                            className="w-full p-4 px-6 text-xs font-medium border border-gray-200 rounded-full outline-none text-primaryDark placeholder:text-solid-slate-400 bg-[#FCFCFD]"
                            placeholder={`Enter Here`}
                            maxLength={4}
                            // value={value}
                            inputMode="numeric"
                            onKeyDown={(e) => {
                              // Allow only numeric input (0-9) and the backspace key
                              if (
                                !(
                                  (e.key >= "0" && e.key <= "9") ||
                                  e.key === "Backspace"
                                )
                              ) {
                                e.preventDefault();
                              }
                            }}
                          />
                          {meta.touched && meta.error && (
                            <div className="text-red-500 text-xs ml-4 mt-1">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="flex justify-end">
                    <span
                      onClick={async () => {
                        if (countdown <= 0) {
                          values.otp === "";
                          // Clear the OTP field when the "Resend code" button is clicked
                          const data = await sendOtpMutateAsync({
                            email: values.email,
                          });
                          if (data?.status) {
                            setCountdown(TIMER);
                          } else {
                            // alert(data?.message);
                            Swal.fire("Register", data.message, "warning");
                          }
                        }
                      }}
                      className={`mt-3 mb-5 text-sm font-medium text-right  ${
                        countdown > 0 || otpLoading
                          ? "text-gray-400"
                          : "text-primary cursor-pointer"
                      } `}
                    >
                      <span className="text-gray-400 font-medium ">
                        Didn't get the code?
                      </span>{" "}
                      Resend code{" "}
                      {countdown > 0 && <span>in {countdown} sec</span>}
                    </span>
                  </div>

                  {/* <div className="flex  justify-center md:justify-end  md:mt-0">
                    <span
                      onClick={async () => {
                        if (countdown <= 0) {
                          values.otp === "";
                          // Clear the OTP field when the "Resend code" button is clicked
                          const data = await sendOtpMutateAsync({
                            email: values.email,
                          });
                          if (data?.status) {
                            setCountdown(TIMER);
                          } else {
                            // alert(data?.message);
                            Swal.fire(
                              "Forgot Password",
                              data.message,
                              "warning"
                            );
                          }
                        }
                      }}
                      className={`mt-3 mb-5 text-sm font-medium  ${
                        countdown > 0 || otpLoading
                          ? "text-gray-400"
                          : "text-primary cursor-pointer"
                      } `}
                    >
                      <span className="text-gray-400 font-medium ">
                        Didn't get the code?
                      </span>{" "}
                      Resend code{" "}
                      {countdown > 0 && <span>in {countdown} sec</span>}
                    </span>
                  </div> */}
                </>
              )}

              {step == 2 && (
                <>
                  <div className="py-6 text-left ">
                    <div className="flex pb-4 justify-center md:justify-start items-center ">
                      <div
                        className="text-md text-sm flex items-center gap-1 font-medium mr-1 
            text-[#3787FF] border-none"
                      >
                        Step {step + 1} of 3
                      </div>
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.70898 14.5L10.084 15.8125L15.6484 10.501L10.084 5.18945L8.70898 6.50195L12.8984 10.501L8.70898 14.5Z"
                          fill="#3787FF"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-3xl font-semibold text-primaryDark">
                      Almost done {values?.fullName}!
                    </h4>{" "}
                    <h4 className="mb-2 text-3xl font-semibold text-primaryDark">
                      Provide Company Details
                    </h4>
                    <p className="text-sm text-gray-400">
                      Please enter your detail and Register Now.
                    </p>
                  </div>
                  <InputField
                    name="companyName"
                    placeholder="Company Name"
                    asterisk="*"
                  />
                  <InputField
                    name="designation"
                    placeholder="Your Designation"
                    asterisk="*"
                  />
                  <InputField
                    name="address"
                    placeholder="Address"
                    asterisk="*"
                  />
                  <InputField
                    name="building"
                    placeholder="Suite / Unit / Building (optional)"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <OnboardSelectField
                      isRequired
                      name="country"
                      placeholder="Country"
                      asterisk="*"
                      // options={updatedCountries}

                      options={[{ value: "india", label: "india" }]}
                      onChange={(country: string) => {
                        setFieldValue("country", country);
                        setFieldValue("state", null);
                        setFieldValue("city", null);
                      }}
                    />

                    <OnboardSelectField
                      isRequired
                      name="state"
                      placeholder="State"
                      asterisk="*"
                      // options={updatedStates(values.country)}
                      options={[
                        { value: "Rajasthan", label: "Rajasthan" },
                        {
                          value: "Arunachal Pradesh",
                          label: "Arunachal Pradesh",
                        },
                        { value: "Assam", label: "Assam" },
                        // Add more states as needed
                        { value: "West Bengal", label: "West Bengal" },
                      ]}
                      onChange={(state: string) => {
                        setFieldValue("state", state);
                        setFieldValue("city", null);
                      }}
                    />

                    <OnboardSelectField
                      isRequired
                      name="city"
                      placeholder="City"
                      asterisk="*"
                      options={[
                        { value: "Jaipur", label: "Jaipur" },
                        { value: "Jodhpur", label: "Jodhpur" },
                        { value: "Udaipur", label: "Udaipur" },
                        { value: "Ajmer", label: "Ajmer" },
                        { value: "Kota", label: "Kota" },
                      ]}
                      // options={updatedCities(values.country, values.state)}
                      onChange={(city: string) => {
                        console.log(city);
                        setFieldValue("city", city);
                      }}
                    />
                    <InputField
                      name="pinCode"
                      placeholder="Zip Code"
                      asterisk="*"
                    />
                  </div>
                </>
              )}

              {step == 3 && (
                <>
                  <div className="flex  flex-col items-center justify-center px-4 py-6 text-center ">
                    <div className="pr-8">
                      <div className=" flex items-center justify-center">
                        <PgDone />
                      </div>
                      <h4 className="mb-2 pl-8 text-3xl font-semibold text-primaryDark">
                        All Done!
                      </h4>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              <div className="flex justify-center">
                {(step == 0 || step == 1) && (
                  <div
                    className="mt-4 w-full"
                    onClick={() => {
                      if (step == 1) window.scrollTo(0, 0);
                    }}
                  >
                    <PgButton
                      type="submit"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      title="Continue"
                    />
                  </div>
                )}

                {step == 2 && (
                  <div onClick={() => window.scrollTo(0, 0)}>
                    <PgButton
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      type="submit"
                      title="Sign Up"
                    />
                  </div>
                )}
                {step == 3 && (
                  <div
                    className="w-full"
                    onClick={() => {
                      console.log(localStorage.getItem("accessToken"));
                      handelCurrentUser(true);
                      navigate("/", {
                        replace: true,
                      });
                    }}
                  >
                    <PgButton
                      onClick={() => window.scrollTo(0, 0)}
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                      title="Go to Dashboard"
                    />
                  </div>
                )}
              </div>
            </div>
            {step == 0 && (
              <>
                {/* //Social Media Buttons */}
                <div>
                  <div className="flex items-center mt-10 text-sm">
                    <div className="h-[1.5px] bg-gray-300 flex-1 "></div>
                    <div className="mx-3 font-medium text-gray-400 ">
                      or Register with
                    </div>
                    <div className="h-[1.5px] bg-gray-300 flex-1 "></div>
                  </div>
                  <div className="flex flex-col gap-5 mt-10 mb-20 text-sm md:flex-row">
                    <PgSocialButton
                      onClick={() => {
                        googleRegister();
                      }}
                      disabled={googleLoading}
                      isLoading={googleLoading}
                      icon={<FcGoogle size={28} color="#0b66c2" />}
                      title="Continue with Google"
                    />

                    <PgSocialButton
                      onClick={() => linkedInRegister()}
                      disabled={linkedinLoading}
                      isLoading={linkedinLoading}
                      icon={<FaLinkedin size={28} color="#0b66c2" />}
                      title="Continue with Linkedin"
                    />
                  </div>
                </div>
                {/*Register Link */}
                <div className="font-medium text-center">
                  <span className="text-gray-400">
                    Already have an account?
                  </span>
                  <span className="text-primaryDark">
                    <Link
                      to="/auth/login"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {" "}
                      Login here
                    </Link>
                  </span>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
