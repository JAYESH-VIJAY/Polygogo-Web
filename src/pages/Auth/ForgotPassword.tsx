import { resetPassword, sendOtp } from "@/api/mutation/auth";
import { Email } from "@/assets/Email";
import PgLogoDark from "@/assets/dashboard/PgLogoDark";
import InputField from "@/components/Input/InputField";
import PasswordField from "@/components/Input/PasswordField";
import PgButton from "@/components/Input/PgButton";
import { Form, Formik, Field } from "formik";
import { BAD_REQUEST } from "http-status";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

function ForgotPassword() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      console.log("Back button clicked!");
      if (step == 0) {
        navigate("/auth/login");
      }
      if (step == 1 || step == 2) {
        setStep(step - 1);
      }
    });
  }, [step]);

  const TIMER = step == 1 ? 60 : 0;
  const [countdown, setCountdown] = useState(TIMER);
  const { otpData, otpLoading, sendOtpMutateAsync } = sendOtp();
  const { resetPasswordMutateAsync, resetPasswordLoading } = resetPassword();
  const navigate = useNavigate();
  const validation = [
    Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address"),
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
        .oneOf([Yup.ref("password")], "Confirm password should match")
        .required("Confirm Password is required"),
    }),
  ];
  // useEffect(() => {
  //   // Create a function to decrement the countdown timer
  //   const decrementCountdown = () => {
  //     if (countdown > 0) {
  //       setCountdown(countdown - 1);
  //     }
  //   };

  //   // Use setInterval to decrement the countdown every second
  //   const countdownInterval = setInterval(decrementCountdown, 1000);

  //   // Clear the interval when the component unmounts
  //   return () => {
  //     clearInterval(countdownInterval);
  //   };
  // }, [countdown, step]);
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

  return (
    <div className="md:mx-6 md:p-12  ">
      {/*Logo*/}
      <Formik
        initialValues={{
          email: "",
          otp: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validation[step]}
        onSubmit={async (values, { setFieldValue }) => {
          if (step == 0) {
            const data = await sendOtpMutateAsync({
              email: values.email,
            });
            if (data?.status) {
              setStep(step + 1);
              setCountdown(60);
            } else {
              // alert(data?.message);
              Swal.fire("Forgot Password", data.message, "warning");
            }
          }
          if (step == 1) {
            setStep(step + 1);
          }
          if (step == 2) {
            const data = await resetPasswordMutateAsync({
              email: values.email,
              password: values.password,
              otp: values.otp,
            });
            if (data?.statusCode == BAD_REQUEST) {
              // alert(data?.message);
              Swal.fire("Forgot Password", data.message, "warning");
            } else {
              // alert(data?.message);
              Swal.fire("Forgot Password", data.message, "success");
              navigate("/auth/login", { replace: true });
            }
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              {step == 0 && (
                <div className=" mt-40 md:mt-0">
                  <div className="py-6 ml-2 text-center md:text-left ">
                    <div className="md:hidden flex justify-center flex-col mb-6  items-center gap-2">
                      <PgLogoDark />
                    </div>
                    <h4 className="mb-2 text-3xl font-semibold text-primaryDark">
                      Forgot Password
                    </h4>
                    <p className="text-sm text-gray-400">
                      Please enter your email to reset your password
                    </p>
                  </div>

                  <div className="flex flex-col mb-2 mx-4 md:mx-0">
                    <InputField name="email" placeholder="Email Address" />
                  </div>
                </div>
              )}
              {step == 1 && (
                <div className=" relative ">
                  <div className="bg-primary  h-[200px]   w-full flex justify-center  md:hidden">
                    <h4 className=" text-3xl font-semibold mt-12 text-white">
                      Verify Email
                    </h4>
                    <div className="z-100 absolute w-full right-0 top-32 flex justify-center  ">
                      {/* <img src="../../assets/email.svg" alt="email" className="w-24" /> */}
                      <Email />
                    </div>
                  </div>

                  <div className="py-6 text-center md:text-left mx-4 md:mx-0 mt-8 ">
                    <h4 className="mb-2 text-3xl font-semibold text-primaryDark">
                      Enter Code
                    </h4>
                    <p className="text-sm text-gray-400 mt-3 md:mt-0">
                      Enter the 4 digit code we sent you via email to continue
                    </p>
                  </div>
                  <div className="flex flex-col mb-2 mx-4 md:mx-[-4px]">
                    {/* <Field name="otp">
                      {({ field, meta }) => (
                        <div>
                          <input
                            {...field}
                            className="w-full p-4 px-6 text-xs font-medium border border-gray-200 rounded-full outline-none text-primaryDark placeholder:text-solid-slate-400 bg-[#FCFCFD]"
                            placeholder={`Enter Here`}
                            maxLength={4}
                            // value={value}
                            name="otp"
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
                    </Field> */}
                    <InputField name="otp" />
                  </div>

                  <div className="flex  justify-center md:justify-end  md:mt-0">
                    <span
                      onClick={async () => {
                        if (countdown <= 0) {
                          values.otp == "";
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
                  </div>
                </div>
              )}
              {step == 2 && (
                <div className="mx-4 md:mx-0 mt-40 md:mt-0 ">
                  <div className="py-6 md:text-left ml-2 text-center  ">
                    <h4 className="mb-2 text-3xl  font-semibold text-primaryDark">
                      Reset Password
                    </h4>
                    <p className="text-sm text-gray-400">
                      Please choose your new password
                    </p>
                  </div>

                  <div className="flex flex-col mb-2">
                    <PasswordField name="password" placeholder="New Password" />
                    <div>
                      <PasswordField
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className=" flex justify-center ">
                <div
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex justify-center mx-4 md:mx-0 w-full"
                >
                  <PgButton
                    type="submit"
                    title="Continue"
                    isLoading={otpLoading || resetPasswordLoading}
                    disabled={otpLoading || resetPasswordLoading}
                  />
                </div>
              </div>
            </div>
            {/* //Social Media Buttons */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ForgotPassword;
