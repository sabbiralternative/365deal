import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { Settings } from "../../api";
import { setUser } from "../../redux/features/auth/authSlice";
import { setShowBanner } from "../../redux/features/global/globalSlice";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token, memberId }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: Settings.b2c,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;

      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
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
                                <a
                                  href="/"
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
                                </a>
                                <form
                                  onSubmit={handleSubmit(onSubmit)}
                                  noValidate="novalidate"
                                  className="v-form"
                                >
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
                                              Username
                                            </label>
                                            <input
                                              {...register("username", {
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
                                                  showPassword
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
                                  <div className="custom-checkbox text-left ml-1 mb-2">
                                    <input
                                      defaultChecked
                                      id="rememberMe"
                                      type="checkbox"
                                    />
                                    <label htmlFor="rememberMe">
                                      <span className="check-box">
                                        Remember Me
                                      </span>
                                    </label>
                                  </div>
                                  <button
                                    type="submit"
                                    className="v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--dark v-size--large primary"
                                    id="loginBtn"
                                  >
                                    <span className="v-btn__content">
                                      Login
                                    </span>
                                  </button>
                                  <div className="row mt-2">
                                    <div className="col"></div>
                                  </div>
                                </form>
                                {/* <div className="v-card__text pa-0 text-center">
                                  <a
                                    href="https://wa.me//8652328751"
                                    target="_blank"
                                    className="btn-hightlight v-btn v-btn--text theme--dark v-size--default green--text"
                                  >
                                    <span className="v-btn__content">
                                      <i
                                        aria-hidden="true"
                                        className="v-icon notranslate v-icon--left mdi mdi-whatsapp theme--dark green--text"
                                      />
                                      <span className="white--text">
                                        +918652328751
                                      </span>
                                    </span>
                                  </a>
                                </div> */}
                              </div>
                              <a
                                onClick={loginWithDemo}
                                className="nuxt-link-active"
                                hrefLang="en"
                              >
                                <div className="text-center my-4">
                                  Continue as Guest
                                </div>
                              </a>
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

export default Login;
