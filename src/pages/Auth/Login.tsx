import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import PgButton from "@/components/Input/PgButton";
import { Form, Formik } from "formik";
import InputField from "@/components/Input/InputField";
import PasswordField from "@/components/Input/PasswordField";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleUserInfo, linkedinUserInfo } from "@/api/mutation/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import * as Yup from "yup";
import PgSocialButton from "@/components/Input/PgSocialButton";
import PgLogoDark from "@/assets/dashboard/PgLogoDark";
function Login() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the viewport height changed to determine if the keyboard is visible
      const isCurrentlyVisible = window.innerHeight < window.outerHeight;

      if (!isCurrentlyVisible) {
        // Keyboard is hidden
        // Adjust the form's zoom level back to 1
        (document.body.style as any).zoom = 1;
      }

      setKeyboardVisible(isCurrentlyVisible);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { googleMutateAsync, googleLoading } = googleUserInfo();
  const { linkedinMutateAsync, linkedinLoading } = linkedinUserInfo();
  const { handleLogin } = useContext(AuthContext);
  const { linkedInLogin } = useLinkedIn({
    clientId: "86sp6f3j2getp8",
    redirectUri: `${window.origin}/linkedin`,
    scope: "openid profile email",
    onSuccess: async (code) => {
      const user = await linkedinMutateAsync({
        code: code,
        redirectUri: `${window.origin}/linkedin`,
      });
      const login = await handleLogin({
        email: user.data.email,
        loginType: user.data.loginType,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        const user = await googleMutateAsync({
          access_token: codeResponse?.access_token,
        });

        const login = await handleLogin({
          email: user.data.email,
          loginType: user.data.loginType,
        });
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <>
      <div className="md:hidden flex justify-center mt-8">
        <PgLogoDark />
      </div>
      <div className="md:mx-6 md:p-12 pt-0 md:py-24 px-4 ">
        {/*Logo*/}
        <div className="py-6 text-center md:text-left ">
          <h4 className="mb-2 text-3xl font-semibold text-primaryDark">
            Welcome back!
          </h4>
          <p className="text-sm text-gray-400">
            Please enter your detail and Login
          </p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Please enter a valid email address")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            await handleLogin({
              email: values?.email,
              password: values.password,
              loginType: "NORMAL",
            });

            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <>
              <Form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                  <InputField name="email" placeholder="Email Address" />
                  <PasswordField name="password" placeholder="Password" />
                </div>
                <div>
                  <div className="mb-6 tracking-wide hover:text-[#5b687d] text-[12px] font-medium text-right text-[#98A2B3] cursor-pointer mt-2 sm:mt-2">
                    <Link to="/auth/forgot">Forgot Password?</Link>
                  </div>

                  <div className="flex justify-center">
                    <PgButton
                      type="submit"
                      title="Login"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                    />
                  </div>
                </div>
                {/* //Social Media Buttons */}
                <div>
                  <div className="flex items-center my-10 text-sm">
                    <div className="h-[1.5px] bg-gray-300 flex-1 "></div>
                    <div className="mx-3 font-medium text-gray-400 ">
                      or Login with
                    </div>
                    <div className="h-[1.5px] bg-gray-300 flex-1 "></div>
                  </div>
                  <div className="flex flex-col gap-5 mt-10 mb-20 text-sm md:flex-row">
                    <PgSocialButton
                      onClick={() => {
                        googleLogin();
                      }}
                      disabled={googleLoading}
                      isLoading={googleLoading}
                      icon={<FcGoogle size={28} color="#0b66c2" />}
                      title="Continue with Google"
                    />

                    <PgSocialButton
                      onClick={() => linkedInLogin()}
                      isLoading={linkedinLoading}
                      disabled={linkedinLoading}
                      icon={<FaLinkedin size={28} color="#0b66c2" />}
                      title="Continue with Linkedin"
                    />
                  </div>
                </div>

                {/*Register Link */}
                <div className="font-medium text-center">
                  <span className="text-gray-400">New to Polygogo? </span>
                  <span className="text-primaryDark">
                    <Link
                      to="/auth/register"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Register here
                    </Link>
                  </span>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Login;
