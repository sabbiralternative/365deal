import { Link, useLocation } from "react-router-dom";

const SliderTab = () => {
  const { pathname } = useLocation();

  return (
    <div className="v-toolbar__extension" style={{ height: "65px" }}>
      <div className="v-tabs menu-tabs v-tabs--centered v-tabs--grow theme--dark">
        <div
          role="tablist"
          className="v-item-group theme--dark v-slide-group v-slide-group--is-overflowing v-tabs-bar v-tabs-bar--is-mobile white--text"
          data-booted="true"
        >
          <div className="v-slide-group__prev v-slide-group__prev--disabled"></div>
          <div className="v-slide-group__wrapper">
            <div className="v-slide-group__content v-tabs-bar__content">
              <div className="fill-height mt-0">
                <div className="py-0 d-flex fill-height align-center">
                  <div className="d-flex align-center game-nav">
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/"
                        aria-current="page"
                        className={`caption caption-mobile py-2 px-2 mx-2  v-tab ${
                          pathname === "/" ? "v-tab--active" : ""
                        }`}
                        tabIndex={0}
                        aria-selected="true"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/Inplay.f013f6b.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Inplay </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        className={`caption caption-mobile py-2 px-2 mx-2  v-tab ${
                          pathname === "/sports-book/cricket/4"
                            ? "v-tab--active"
                            : ""
                        }`}
                        to="/sports-book/cricket/4"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/Cricket.c500f65.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> cricket </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/sports-book/football/1"
                        className={`caption caption-mobile py-2 px-2 mx-2  v-tab ${
                          pathname === "/sports-book/football/1"
                            ? "v-tab--active"
                            : ""
                        }`}
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/Soccer.ada6d10.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Soccer </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/sports-book/tennis/2"
                        className={`caption caption-mobile py-2 px-2 mx-2  v-tab ${
                          pathname === "/sports-book/tennis/2"
                            ? "v-tab--active"
                            : ""
                        }`}
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/Tennis.fbfaf6c.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Tennis </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/sports-book/horse-racing"
                        className="caption caption-mobile py-2 px-2 mx-2 v-tab"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/horse.6027cdf.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Horse Racing </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/sports-book/greyhound-racing"
                        className="caption caption-mobile py-2 px-2 mx-2 v-tab"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/greyhound.0cc5597.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Greyhound Racing </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/casino"
                        className="caption caption-mobile py-2 px-2 mx-2 v-tab"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/Live-Casino.a78614f.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Live Casino </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav"></div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/live-casino"
                        className="caption caption-mobile py-2 px-2 mx-2 v-tab"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/fundlist.fb78c07.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Crash Games </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/live-cards"
                        className="caption caption-mobile py-2 px-2 mx-2 v-tab"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--contain"
                            style={{
                              backgroundImage:
                                'url("https://365deal.in/_nuxt/img/Live-Card.ef8e4bb.webp")',
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Live Card </span>
                      </Link>
                    </div>
                    <div className="d-flex align-center game-nav menu-nav">
                      <Link
                        to="/casino-slots"
                        className="caption caption-mobile py-2 px-2 mx-2 v-tab"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center mr-2 theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--preload v-image__image--contain"
                            style={{
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        <span> Slot Games </span>
                      </Link>
                    </div>
                    <div className="d-none game-nav">
                      <Link
                        to="/"
                        aria-current="page"
                        className="caption caption-mobile v-tab--active v-tab px-2 ml-3 mr-1"
                        tabIndex={0}
                        aria-selected="true"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--preload v-image__image--contain"
                            style={{
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        Inplay{" "}
                      </Link>
                      <Link
                        to="/sportsbook/Cricket"
                        className="caption caption-mobile v-tab px-2 ml-3 mr-1"
                        tabIndex={0}
                        aria-selected="false"
                        role="tab"
                      >
                        <div
                          className="v-image v-responsive rounded-t-lg justify-content-center theme--dark"
                          style={{ height: "20px", width: "24px" }}
                        >
                          <div
                            className="v-responsive__sizer"
                            style={{ paddingBottom: "100%" }}
                          />
                          <div
                            className="v-image__image v-image__image--preload v-image__image--contain"
                            style={{
                              backgroundPosition: "center center",
                            }}
                          />
                          <div className="v-responsive__content" />
                        </div>
                        Sports Exch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="v-slide-group__next v-slide-group__next--disabled"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderTab;
