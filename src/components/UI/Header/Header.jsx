import { Link } from "react-router-dom";
import SliderTab from "./SliderTab";

const Header = () => {
  return (
    <div data-v-d623efb6>
      <header
        data-v-d623efb6
        className="header-section pl-0 pr-0 v-sheet theme--dark v-toolbar v-toolbar--dense v-toolbar--extended v-toolbar--flat v-app-bar black"
        data-booted="true"
        style={{
          height: "130px",
          maxHeight: "65px",
          marginTop: "0px",
          transform: "translateY(0px)",
          left: "0px",
          right: "0px",
        }}
      >
        <div className="v-toolbar__content" style={{ height: "65px" }}>
          <div className="row header-top no-gutters align-center pt-2">
            <div className="d-flex align-center br-0 header-margin div-tilt v-sheet theme--dark">
              <div
                aria-label="menu icon"
                role="img"
                className="v-image v-responsive ml-3 mr-2 cursor-pointer theme--dark mt-4 cursor-pointer-fps"
                id="v-step-0"
                style={{ maxWidth: "24px" }}
              >
                <div
                  className="v-responsive__sizer"
                  style={{ paddingBottom: "79.2453%" }}
                />
                <div
                  className="v-image__image v-image__image--cover"
                  style={{
                    backgroundImage:
                      'url("https://deal-imgix-production.imgix.net/menu.png")',
                    backgroundPosition: "center center",
                  }}
                />
                <div
                  className="v-responsive__content"
                  style={{ width: "53px" }}
                />
              </div>
              <Link
                to="/"
                aria-current="page"
                className="nuxt-link-exact-active nuxt-link-active"
              >
                <div
                  aria-label="Logo"
                  role="img"
                  className="v-image v-responsive theme--dark"
                  style={{ height: "50px", width: "130px" }}
                >
                  <div
                    className="v-responsive__sizer"
                    style={{ paddingBottom: "59.8802%" }}
                  />
                  <div
                    className="v-image__image v-image__image--contain"
                    style={{
                      backgroundImage:
                        'url("https://deal-imgix-production.imgix.net/website-logo.webp")',
                      backgroundPosition: "center center",
                    }}
                  />
                  <div className="v-responsive__content" />
                </div>
              </Link>
            </div>
            <div className="text-center mr-2">
              <button
                type="button"
                className="header-btns fill-bg v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--x-small"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderColor: "rgba(0, 0, 0, 0)",
                }}
              >
                <span className="v-btn__content">
                  <div
                    className="v-image v-responsive theme--dark"
                    style={{ height: "14px", width: "20px" }}
                  >
                    <div
                      className="v-responsive__sizer"
                      style={{ paddingBottom: "100%" }}
                    />
                    <div
                      className="v-image__image v-image__image--contain"
                      style={{
                        backgroundImage:
                          'url("https://playexchco.imgix.net/images/index/reload.svg")',
                        backgroundPosition: "center center",
                      }}
                    />
                    <div
                      className="v-responsive__content"
                      style={{ width: "29px" }}
                    />
                  </div>
                  <span> Refresh </span>
                </span>
              </button>
            </div>
            <div className="spacer" />

            <span className="login form before-loggin-fps">
              <div noValidate="novalidate" className="v-form d-flex login-form">
                {/* <div>
                  <div className="d-flex align-center">
                    <div className="v-input form-input input-width mr-2 v-input--dense theme--dark v-text-field v-text-field--single-line v-text-field--is-booted">
                      <div className="v-input__control">
                        <div className="v-input__slot">
                          <div className="v-text-field__slot">
                            <label
                              htmlFor="input-59"
                              className="v-label theme--dark"
                              style={{
                                left: "0px",
                                right: "auto",
                                position: "absolute",
                              }}
                            >
                              Username
                            </label>
                            <input
                              required="required"
                              id="input-59"
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
                  <div className="text-right caption mt-n2 mr-2 error_message">
                    <div className="custom-checkbox">
                      <input id="rememberMe" type="checkbox" />
                      <label
                        htmlFor="rememberMe"
                        className="header-label primary--text"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="login-password">
                    <div className="v-input input-width mr-1 v-input--dense theme--dark v-text-field v-text-field--single-line v-text-field--is-booted v-text-field--placeholder">
                      <div className="v-input__control">
                        <div className="v-input__slot">
                          <div className="v-text-field__slot">
                            <input
                              required="required"
                              id="input-62"
                              placeholder="Password"
                              type="password"
                            />
                          </div>
                          <div className="v-input__append-inner">
                            <div className="v-input__icon v-input__icon--append">
                              <button
                                type="button"
                                aria-label=" appended action"
                                className="v-icon notranslate v-icon--link mdi mdi-eye theme--dark"
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
                </div> */}
                <Link
                  to="/login"
                  className="mr-2 loginBtn primary-boxshadow font-weight-bold v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--large primary"
                >
                  <span className="v-btn__content">
                    <span className="white--text">Login</span>
                  </span>
                </Link>
                <Link
                  to="/register"
                  className="mr-2 loginBtn primary-boxshadow font-weight-bold v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--large"
                >
                  <span className="v-btn__content">
                    <span className="white--text">Register</span>
                  </span>
                </Link>
              </div>
            </span>
          </div>
        </div>
        <SliderTab />
      </header>
    </div>
  );
};

export default Header;
