import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../api";
import { setUser } from "../../redux/features/auth/authSlice";
import { setShowBanner } from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const [mobile, setMobile] = useState("");
  const [order, setOrder] = useState({});
  const referralCode = localStorage.getItem("referralCode");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);

  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setOrder({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: Settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: order.orderId,
      otpMethod: order.otpMethod,
    };

    const result = await handleRegister(registerData).unwrap();

    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const memberId = result?.result?.memberId;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      localStorage.setItem("token", token);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        navigate("/");
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleMobileNo = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };

  return (
    <div id="__nuxt">
      <div id="__layout">
        <div
          data-app="true"
          className="v-application v-application--is-ltr theme--dark"
          id="app"
        >
          <div className="v-application--wrap">
            <div />
            <main
              className="v-main pt-0"
              data-booted="true"
              style={{ padding: "0px" }}
            >
              <div className="v-main__wrap">
                <div data-v-478cbc02 />
                <div className="v-lazy fill-height">
                  <div
                    aria-label="login background"
                    role="img"
                    className="v-image v-responsive fill-height theme--dark"
                    style={{ height: "100vh" }}
                  >
                    <div
                      className="v-responsive__sizer"
                      style={{ paddingBottom: "66.7%" }}
                    />
                    <div
                      className="v-image__image v-image__image--cover"
                      style={{
                        backgroundImage:
                          'url("https://deal-imgix-production.imgix.net/drop.png")',
                        backgroundPosition: "center center",
                      }}
                    />
                    <div
                      className="v-responsive__content"
                      style={{ width: "1000px" }}
                    >
                      <div className="container fill-height login-style container--fluid">
                        <div className="row align-center justify-center">
                          <div className="width-400 col-sm-8 col-md-5 col-12">
                            <div className="primary--border bg-card-color-opacity v-card v-sheet theme--dark">
                              <div className="v-card__text text-center">
                                <Link
                                  to="/"
                                  className="nuxt-link-active"
                                  hrefLang="en"
                                >
                                  <div
                                    aria-label="logo"
                                    role="img"
                                    className="v-image v-responsive mb-6 theme--dark"
                                    style={{ height: "75px", maxWidth: "100%" }}
                                  >
                                    <div
                                      className="v-responsive__sizer"
                                      style={{ paddingBottom: "16.9388%" }}
                                    />
                                    <div
                                      className="v-image__image v-image__image--contain"
                                      style={{
                                        backgroundImage:
                                          'url("https://deal-imgix-production.imgix.net/website-logo.webp")',
                                        backgroundPosition: "center center",
                                      }}
                                    />
                                    <div
                                      className="v-responsive__content"
                                      style={{ width: "980px" }}
                                    />
                                  </div>
                                </Link>
                                <form
                                  onSubmit={handleSubmit(onSubmit)}
                                  noValidate="novalidate"
                                  className="v-form"
                                >
                                  {/* Mobile Input */}
                                  <div className="d-flex align-center">
                                    <i
                                      aria-hidden="true"
                                      className="v-icon notranslate my-1 mr-2 mdi mdi-account theme--dark"
                                    />

                                    <div className="v-input form-input line-height v-input--is-label-active v-input--is-dirty theme--dark v-text-field v-text-field--is-booted">
                                      <div className="v-input__control">
                                        <div className="v-input__slot">
                                          <div className="v-text-field__slot">
                                            <label
                                              htmlFor="input-29"
                                              className="v-label v-label--active theme--dark"
                                              style={{
                                                left: "0px",
                                                right: "auto",
                                                position: "absolute",
                                              }}
                                            >
                                              Mobile Number
                                            </label>
                                            <input
                                              onChange={(e) =>
                                                handleMobileNo(e)
                                              }
                                              required
                                              id="input-29"
                                              type="number"
                                            />
                                          </div>
                                          {timer ? (
                                            <button
                                              style={{
                                                position: "absolute",
                                                right: "0px",
                                                width: "fit-content",
                                                height: "auto",
                                                padding: "4px",

                                                fontSize: "10px",
                                                cursor: "default",
                                              }}
                                              type="button"
                                              className="v-btn  v-btn--is-elevated v-btn--has-bg theme--dark v-size--large primary"
                                              id="loginBtn"
                                            >
                                              <span className="v-btn__content">
                                                Retry in {timer}
                                              </span>
                                            </button>
                                          ) : (
                                            <button
                                              disabled={mobile?.length < 10}
                                              onClick={handleOTP}
                                              style={{
                                                position: "absolute",
                                                right: "0px",
                                                width: "fit-content",
                                                height: "auto",
                                                padding: "4px",

                                                fontSize: "10px",
                                              }}
                                              type="button"
                                              className="v-btn  v-btn--is-elevated v-btn--has-bg theme--dark v-size--large primary"
                                              id="loginBtn"
                                            >
                                              <span className="v-btn__content">
                                                Get OTP Message
                                              </span>
                                            </button>
                                          )}
                                        </div>
                                        <div className="v-text-field__details">
                                          <div className="v-messages theme--dark">
                                            <div className="v-messages__wrapper" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* OTP input */}
                                  <div className="d-flex align-center">
                                    <i
                                      aria-hidden="true"
                                      className="v-icon notranslate my-1 mr-2 mdi mdi-account theme--dark"
                                    />

                                    <div className="v-input form-input line-height v-input--is-label-active v-input--is-dirty theme--dark v-text-field v-text-field--is-booted">
                                      <div className="v-input__control">
                                        <div className="v-input__slot">
                                          <div className="v-text-field__slot">
                                            <label
                                              htmlFor="input-29"
                                              className="v-label v-label--active theme--dark"
                                              style={{
                                                left: "0px",
                                                right: "auto",
                                                position: "absolute",
                                              }}
                                            >
                                              OTP
                                            </label>
                                            <input
                                              {...register("otp", {
                                                required: true,
                                              })}
                                              required="required"
                                              id="input-29"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                        <div className="v-text-field__details">
                                          <div className="v-messages theme--dark">
                                            <div className="v-messages__wrapper" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Password input */}
                                  <div className="login-password">
                                    <div className="v-input v-input--is-label-active v-input--is-dirty theme--dark v-text-field v-text-field--is-booted v-text-field--placeholder">
                                      <div className="v-input__prepend-outer">
                                        <div className="v-input__icon v-input__icon--prepend">
                                          <i
                                            aria-hidden="true"
                                            className="v-icon notranslate mdi mdi-lock theme--dark"
                                          />
                                        </div>
                                      </div>
                                      <div className="v-input__control">
                                        <div className="v-input__slot">
                                          <div className="v-text-field__slot">
                                            <input
                                              {...register("password", {
                                                required: true,
                                              })}
                                              required="required"
                                              id="input-32"
                                              placeholder="Password"
                                              type={
                                                showPassword
                                                  ? "text"
                                                  : "password"
                                              }
                                            />
                                          </div>
                                          <div
                                            onClick={() =>
                                              setShowPassword((prev) => !prev)
                                            }
                                            className="v-input__append-inner"
                                          >
                                            <div className="v-input__icon v-input__icon--append">
                                              <button
                                                type="button"
                                                aria-label=" appended action"
                                                className={`v-icon notranslate v-icon--link mdi ${
                                                  !showPassword
                                                    ? "mdi-eye-off"
                                                    : "mdi-eye"
                                                } theme--dark`}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="v-text-field__details">
                                          <div className="v-messages theme--dark">
                                            <div className="v-messages__wrapper" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/*Confirm Password input */}
                                  <div className="login-password">
                                    <div className="v-input v-input--is-label-active v-input--is-dirty theme--dark v-text-field v-text-field--is-booted v-text-field--placeholder">
                                      <div className="v-input__prepend-outer">
                                        <div className="v-input__icon v-input__icon--prepend">
                                          <i
                                            aria-hidden="true"
                                            className="v-icon notranslate mdi mdi-lock theme--dark"
                                          />
                                        </div>
                                      </div>
                                      <div className="v-input__control">
                                        <div className="v-input__slot">
                                          <div className="v-text-field__slot">
                                            <input
                                              {...register("confirmPassword", {
                                                required: true,
                                              })}
                                              required="required"
                                              id="input-32"
                                              placeholder="Confirm Password"
                                              type={
                                                showConfirmPassword
                                                  ? "text"
                                                  : "password"
                                              }
                                            />
                                          </div>
                                          <div
                                            onClick={() =>
                                              setShowConfirmPassword(
                                                (prev) => !prev
                                              )
                                            }
                                            className="v-input__append-inner"
                                          >
                                            <div className="v-input__icon v-input__icon--append">
                                              <button
                                                type="button"
                                                aria-label=" appended action"
                                                className={`v-icon notranslate v-icon--link mdi ${
                                                  !showConfirmPassword
                                                    ? "mdi-eye-off"
                                                    : "mdi-eye"
                                                } theme--dark`}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="v-text-field__details">
                                          <div className="v-messages theme--dark">
                                            <div className="v-messages__wrapper" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Referral input */}
                                  <div className="d-flex align-center">
                                    <i
                                      aria-hidden="true"
                                      className="v-icon notranslate my-1 mr-2 mdi mdi-account theme--dark"
                                    />

                                    <div className="v-input form-input line-height v-input--is-label-active v-input--is-dirty theme--dark v-text-field v-text-field--is-booted">
                                      <div className="v-input__control">
                                        <div className="v-input__slot">
                                          <div className="v-text-field__slot">
                                            <label
                                              htmlFor="input-29"
                                              className="v-label v-label--active theme--dark"
                                              style={{
                                                left: "0px",
                                                right: "auto",
                                                position: "absolute",
                                              }}
                                            >
                                              Referral
                                            </label>
                                            <input
                                              readOnly={referralCode}
                                              {...register("referralCode")}
                                              defaultValue={referralCode}
                                              id="input-29"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                        <div className="v-text-field__details">
                                          <div className="v-messages theme--dark">
                                            <div className="v-messages__wrapper" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <button
                                    style={{ width: "100%" }}
                                    type="submit"
                                    className="v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--dark v-size--large primary"
                                    id="loginBtn"
                                  >
                                    <span className="v-btn__content">
                                      Register
                                    </span>
                                  </button>
                                  <div className="row mt-2">
                                    <div className="col"></div>
                                  </div>
                                </form>
                              </div>
                              <div
                                style={{ fontSize: "14px" }}
                                className="text-center my-4"
                              >
                                <span> Already have an account?</span>
                                <Link
                                  style={{ marginLeft: "5px" }}
                                  to="/login"
                                  className="nuxt-link-active"
                                  hrefLang="en"
                                >
                                  Login
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
