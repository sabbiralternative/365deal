import filterInPlay from "../../../utils/filterInPlay";
import filterUpcoming from "../../../utils/filterUpcoming";

const Tab = ({ tab, setTab, data }) => {
  let inPlay = [];
  let upComing = [];
  if (data) {
    inPlay = filterInPlay(data);
    upComing = filterUpcoming(data);
  }
  return (
    <div data-v-a3b6f728 className="v-tabs pt-0 theme--dark">
      <div
        role="tablist"
        className="v-item-group theme--dark v-slide-group v-tabs-bar v-tabs-bar--is-mobile primary--text"
        style={{ height: "52px" }}
        data-booted="true"
      >
        <div className="v-slide-group__prev v-slide-group__prev--disabled"></div>
        <div className="v-slide-group__wrapper">
          <div className="v-slide-group__content v-tabs-bar__content">
            <div
              onClick={() => setTab("live")}
              data-v-a3b6f728
              tabIndex={0}
              aria-selected="false"
              role="tab"
              className={`v-tab ${tab === "live" ? "v-tab--active" : ""}`}
            >
              <i
                data-v-a3b6f728
                aria-hidden="true"
                className="v-icon notranslate pr-2 mdi mdi-motion-play-outline theme--dark"
                style={{ fontSize: "20px" }}
              />
              <span data-v-a3b6f728 className="v-badge theme--dark">
                Live
                <span className="v-badge__wrapper">
                  <span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    className="v-badge__badge primary"
                    style={{
                      inset: "auto auto calc(100% - 7px) calc(100% + 2px)",
                    }}
                  >
                    {inPlay?.length}
                  </span>
                </span>
              </span>
            </div>
            <div
              onClick={() => setTab("upcoming")}
              data-v-a3b6f728
              tabIndex={0}
              aria-selected="true"
              role="tab"
              className={`v-tab ${tab === "upcoming" ? "v-tab--active" : ""}`}
            >
              <i
                data-v-a3b6f728
                aria-hidden="true"
                className="v-icon notranslate pr-2 mdi mdi-motion-play-outline theme--dark"
                style={{ fontSize: "20px" }}
              />
              <span data-v-a3b6f728 className="v-badge theme--dark">
                Upcoming
                <span className="v-badge__wrapper">
                  <span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    className="v-badge__badge primary"
                    style={{
                      inset: "auto auto calc(100% - 7px) calc(100% + 2px)",
                    }}
                  >
                    {upComing?.length}
                  </span>
                </span>
              </span>
            </div>
            <div
              className={`v-tab ${tab === "league" ? "v-tab--active" : ""}`}
              onClick={() => setTab("league")}
              data-v-a3b6f728
              tabIndex={0}
              aria-selected="false"
              role="tab"
            >
              <i
                data-v-a3b6f728
                aria-hidden="true"
                className="v-icon notranslate pr-2 mdi mdi-format-list-checks theme--dark"
                style={{ fontSize: "20px" }}
              />
              Leagues
            </div>
          </div>
        </div>
        <div className="v-slide-group__next v-slide-group__next--disabled"></div>
      </div>
    </div>
  );
};

export default Tab;
