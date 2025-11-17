/* eslint-disable react/no-unknown-property */

import { useNavigate, useParams } from "react-router-dom";
import { LanguageKey, Status } from "../../../const";
import { useLanguage } from "../../../context/LanguageProvider";
import filterInPlay from "../../../utils/filterInPlay";
import filterUpcoming from "../../../utils/filterUpcoming";
import { languageValue } from "../../../utils/language";

const Group = ({ data, tab }) => {
  const navigate = useNavigate();
  const { valueByLanguage } = useLanguage();
  const { eventTypeId } = useParams();

  let inPlay = [];
  let upComing = [];
  if (data) {
    inPlay = filterInPlay(data);
    upComing = filterUpcoming(data);
  }
  const sports = tab === "live" ? inPlay : upComing;

  const eventName = {
    4: languageValue(valueByLanguage, LanguageKey.CRICKET),
    2: languageValue(valueByLanguage, LanguageKey.TENNIS),
    1: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
    5: languageValue(valueByLanguage, LanguageKey.KABADDI),
  };

  const navigateGameList = (keys) => {
    navigate(`/event-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  return (
    <div
      data-v-a3b6f728
      dense
      className="v-skeleton-loader v-skeleton-loader--tile theme--dark dark-theme"
    >
      <div
        data-v-a3b6f728
        className="v-window v-item-group theme--dark v-tabs-items sportsbook dark-theme"
      >
        <div className="v-window__container">
          <div data-v-a3b6f728 className="v-window-item v-window-item--active">
            <div
              data-v-a3b6f728
              className="v-item-group theme--dark v-expansion-panels v-expansion-panels--flat v-expansion-panels--tile"
            >
              <div
                data-v-a3b6f728
                aria-expanded="true"
                className="v-expansion-panel mt-2 mb-2 border-radius v-expansion-panel--active v-expansion-panel--next-active v-item--active"
                style={{
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              >
                <div data-v-a3b6f728>
                  <button
                    data-v-a3b6f728
                    type="button"
                    aria-expanded="true"
                    className="v-expansion-panel-header caption pa-0 v-expansion-panel-header--active"
                  >
                    <header
                      data-v-b642ba06
                      data-v-a3b6f728
                      className="pl-0 pr-0 vw-100 border-radius-left-right primarybar-bg v-sheet theme--dark v-toolbar v-toolbar--dense v-toolbar--flat"
                      markets="[object Object]"
                      style={{ height: "50px" }}
                    >
                      <div
                        className="v-toolbar__content"
                        style={{ height: "50px" }}
                      >
                        {/* <span
                          data-v-6d9ab45e
                          data-v-b642ba06
                          className="live-position font-weight-bold v-chip v-chip--label v-chip--no-color theme--dark v-size--x-small blue label-left"
                        >
                          <span className="v-chip__content">
                            UPCOMING / Tomorrow at 11:30 AM
                          </span>
                        </span> */}
                        <div
                          data-v-b642ba06
                          className="d-flex border-radius-left align-self-stretch white--text py-2 col-6 px-2 topbar"
                        >
                          <div data-v-b642ba06 className="align-self-center">
                            <i
                              data-v-b642ba06
                              aria-hidden="true"
                              className="v-icon notranslate flex-0 mr-2 mdi mdi-minus theme--dark white--text"
                              style={{ fontSize: "14px" }}
                            />
                          </div>
                          <a
                            data-v-b642ba06
                            className="caption ma-0 px-1 py-2 d-flex flex-column white--text text-capitalize text-left primary-title btn-fixed v-btn v-btn--has-bg v-btn--router v-btn--tile theme--dark v-size--default transparent"
                            style={{ height: "100%" }}
                          >
                            <span className="v-btn__content">
                              <span
                                data-v-b642ba06
                                className="match-time wrap-subtitle"
                              >
                                {eventName[eventTypeId]}
                              </span>
                            </span>
                          </a>
                        </div>
                        <div
                          data-v-b642ba06
                          className="px-0 py-0 d-flex align-items-center w-100"
                        >
                          <div
                            data-v-b642ba06
                            className="d-flex align-items-center custom-left-margin ml-auto"
                          >
                            <div
                              data-v-b642ba06
                              className="caption font-weight-bold col col-6 text-white"
                            >
                              Back
                            </div>
                            <div
                              data-v-b642ba06
                              className="caption font-weight-bold col col-6 text-white"
                            >
                              Lay
                            </div>
                          </div>
                          <span
                            data-v-b642ba06
                            className="v-tooltip v-tooltip--bottom"
                          ></span>
                          <span
                            data-v-b642ba06
                            className="v-tooltip v-tooltip--bottom"
                          ></span>
                          <div
                            data-v-b642ba06
                            aria-haspopup="true"
                            aria-expanded="false"
                          ></div>
                          <div data-v-b642ba06 className>
                            <div
                              data-v-63cedc00
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></div>
                            <span
                              data-v-63cedc00
                              data-v-b642ba06
                              className="v-tooltip v-tooltip--bottom"
                            ></span>
                          </div>
                          <div
                            data-v-b642ba06
                            aria-haspopup="true"
                            aria-expanded="false"
                          ></div>
                          <div
                            data-v-b642ba06
                            className="d-none align-self-center"
                          >
                            <i
                              data-v-b642ba06
                              aria-hidden="true"
                              className="v-icon notranslate flex-0 mr-2 mdi mdi-minus theme--dark white--text"
                              style={{ fontSize: "14px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </header>
                  </button>
                  <div
                    data-v-a3b6f728
                    className="v-expansion-panel-content pa-0"
                  >
                    <div className="v-expansion-panel-content__wrap">
                      <div
                        data-v-14070165
                        data-v-a3b6f728
                        to="/sportsbook/Cricket/6752e74ad2e001117a46f9b0/69162d2d7ebb2dcbbfe3deb0/34956108"
                        className="listOdds"
                      >
                        {sports?.map((key) => {
                          return (
                            <div
                              key={key}
                              data-v-14070165
                              className="d-flex align-center item-odds v-card v-card--flat v-sheet theme--light rounded-0"
                              dense
                              style={{ height: "45px" }}
                            >
                              <a
                                data-v-14070165
                                onClick={() => navigateGameList(key)}
                                className="text-capitalize text-left justify-start caption font-weight-bold flex-grow-1 flex-shrink-1 v-btn v-btn--router v-btn--text v-btn--tile theme--light v-size--default white--text"
                              >
                                <span className="v-btn__content">
                                  <span
                                    data-v-14070165
                                    className="black--text manage-overflow-two"
                                  >
                                    {data[key]?.player1} {data[key]?.player2}
                                  </span>
                                </span>
                              </a>
                              <div
                                data-v-4cdbb03c
                                data-v-14070165
                                className="v-overlay right-side-button v-overlay--absolute v-overlay--active theme--dark overlay-radius "
                                rounded
                                to="/sportsbook/Cricket/6752e74ad2e001117a46f9b0/69162d2d7ebb2dcbbfe3deb0/34956108"
                                style={{ zIndex: 1 }}
                              >
                                {data?.[key]?.status === Status.SUSPENDED && (
                                  <div
                                    className="v-overlay__scrim"
                                    style={{
                                      opacity: "0.46",
                                      backgroundColor: "rgb(33, 33, 33)",
                                      borderColor: "rgb(33, 33, 33)",
                                    }}
                                  />
                                )}

                                <div className="v-overlay__content" />
                              </div>
                              <button
                                data-v-14070165
                                type="button"
                                className="btn-odds black--text font-weight-bold odds-width multiline-btn text-center v-btn v-btn--has-bg v-btn--tile theme--light v-size--small secondary"
                              >
                                <span className="v-btn__content">
                                  <span>
                                    <span data-v-14070165>
                                      <span
                                        data-v-14070165
                                        className="d-block text-center position-relative"
                                      >
                                        {data?.[key]?.[0]?.ex
                                          ?.availableToBack[0]?.price || "-"}
                                      </span>
                                      <div data-v-14070165>
                                        <span className="d-block text-center text-lowercase mini-rate">
                                          <span>
                                            {" "}
                                            {data?.[key]?.[0]?.ex
                                              ?.availableToBack?.[0]?.size ||
                                              "-"}
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </button>
                              <button
                                data-v-14070165
                                type="button"
                                className="btn-odds black--text font-weight-bold odds-width multiline-btn text-center v-btn v-btn--has-bg v-btn--tile theme--light v-size--small secondary"
                              >
                                <span className="v-btn__content">
                                  <span>
                                    <span data-v-14070165>
                                      <span
                                        data-v-14070165
                                        className="d-block text-center position-relative"
                                      >
                                        {data?.[key]?.[2]?.ex
                                          ?.availableToBack[0]?.price || "-"}
                                      </span>
                                      <div data-v-14070165>
                                        <span className="d-block text-center text-lowercase mini-rate">
                                          <span>
                                            {" "}
                                            {data?.[key]?.[2]?.ex
                                              ?.availableToBack?.[0]?.size ||
                                              "-"}
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </button>
                              <button
                                data-v-14070165
                                type="button"
                                className="btn-odds black--text font-weight-bold odds-width multiline-btn text-center v-btn v-btn--has-bg v-btn--tile theme--light v-size--small secondary"
                              >
                                <span className="v-btn__content">
                                  <span>
                                    <span data-v-14070165>
                                      <span
                                        data-v-14070165
                                        className="d-block text-center position-relative"
                                      >
                                        {data?.[key]?.[1]?.ex
                                          ?.availableToBack[0]?.price || "-"}
                                      </span>
                                      <div data-v-14070165>
                                        <span className="d-block text-center text-lowercase mini-rate">
                                          <span>
                                            {" "}
                                            {data?.[key]?.[1]?.ex
                                              ?.availableToBack?.[0]?.size ||
                                              "-"}
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </button>
                              <button
                                data-v-14070165
                                type="button"
                                className="btn-odds black--text font-weight-bold odds-width multiline-btn text-center v-btn v-btn--has-bg v-btn--tile theme--light v-size--small accent"
                              >
                                <span className="v-btn__content">
                                  <span>
                                    <span data-v-14070165>
                                      <span
                                        data-v-14070165
                                        className="d-block text-center position-relative"
                                      >
                                        <div
                                          data-v-14070165
                                          className="v-image v-responsive market-down-arrow theme--light"
                                          style={{
                                            maxWidth: "10px",
                                            display: "none",
                                          }}
                                        >
                                          <div
                                            className="v-image__image v-image__image--preload v-image__image--cover"
                                            style={{
                                              backgroundImage:
                                                'url("data:image/png',
                                              backgroundPosition:
                                                "center center",
                                            }}
                                          />
                                          <div className="v-responsive__content" />
                                        </div>
                                        <div
                                          data-v-14070165
                                          className="v-image v-responsive market-up-arrow theme--light"
                                          style={{
                                            maxWidth: "10px",
                                            display: "none",
                                          }}
                                        >
                                          <div
                                            className="v-image__image v-image__image--preload v-image__image--cover"
                                            style={{
                                              backgroundImage:
                                                'url("data:image/png',
                                              backgroundPosition:
                                                "center center",
                                            }}
                                          />
                                          <div className="v-responsive__content" />
                                        </div>
                                        {data?.[key]?.[0]?.ex
                                          ?.availableToLay?.[0]?.price || "-"}
                                      </span>
                                      <div data-v-14070165>
                                        <span className="d-block text-center text-lowercase mini-rate">
                                          <span>
                                            {" "}
                                            {data?.[key]?.[0]?.ex
                                              ?.availableToLay?.[0]?.size ||
                                              "-"}
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </button>
                              <button
                                data-v-14070165
                                type="button"
                                className="btn-odds black--text font-weight-bold odds-width multiline-btn text-center v-btn v-btn--has-bg v-btn--tile theme--light v-size--small accent"
                              >
                                <span className="v-btn__content">
                                  <span>
                                    <span data-v-14070165>
                                      <span
                                        data-v-14070165
                                        className="d-block text-center position-relative"
                                      >
                                        <div
                                          data-v-14070165
                                          className="v-image v-responsive market-down-arrow theme--light"
                                          style={{
                                            maxWidth: "10px",
                                            display: "none",
                                          }}
                                        >
                                          <div
                                            className="v-image__image v-image__image--preload v-image__image--cover"
                                            style={{
                                              backgroundImage:
                                                'url("data:image/png',
                                              backgroundPosition:
                                                "center center",
                                            }}
                                          />
                                          <div className="v-responsive__content" />
                                        </div>
                                        <div
                                          data-v-14070165
                                          className="v-image v-responsive market-up-arrow theme--light"
                                          style={{
                                            maxWidth: "10px",
                                            display: "none",
                                          }}
                                        >
                                          <div
                                            className="v-image__image v-image__image--preload v-image__image--cover"
                                            style={{
                                              backgroundImage:
                                                'url("data:image/png',
                                              backgroundPosition:
                                                "center center",
                                            }}
                                          />
                                          <div className="v-responsive__content" />
                                        </div>
                                        {data?.[key]?.[2]?.ex
                                          ?.availableToLay?.[0]?.price || "-"}
                                      </span>
                                      <div data-v-14070165>
                                        <span className="d-block text-center text-lowercase mini-rate">
                                          <span>
                                            {" "}
                                            {data?.[key]?.[2]?.ex
                                              ?.availableToLay?.[0]?.size ||
                                              "-"}
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </button>
                              <button
                                data-v-14070165
                                type="button"
                                className="btn-odds black--text font-weight-bold odds-width multiline-btn text-center v-btn v-btn--has-bg v-btn--tile theme--light v-size--small accent"
                              >
                                <span className="v-btn__content">
                                  <span>
                                    <span data-v-14070165>
                                      <span
                                        data-v-14070165
                                        className="d-block text-center position-relative"
                                      >
                                        <div
                                          data-v-14070165
                                          className="v-image v-responsive market-down-arrow theme--light"
                                          style={{
                                            maxWidth: "10px",
                                            display: "none",
                                          }}
                                        >
                                          <div
                                            className="v-image__image v-image__image--preload v-image__image--cover"
                                            style={{
                                              backgroundImage:
                                                'url("data:image/png',
                                              backgroundPosition:
                                                "center center",
                                            }}
                                          />
                                          <div className="v-responsive__content" />
                                        </div>
                                        <div
                                          data-v-14070165
                                          className="v-image v-responsive market-up-arrow theme--light"
                                          style={{
                                            maxWidth: "10px",
                                            display: "none",
                                          }}
                                        >
                                          <div
                                            className="v-image__image v-image__image--preload v-image__image--cover"
                                            style={{
                                              backgroundImage:
                                                'url("data:image/png',
                                              backgroundPosition:
                                                "center center",
                                            }}
                                          />
                                          <div className="v-responsive__content" />
                                        </div>
                                        {data?.[key]?.[1]?.ex
                                          ?.availableToLay?.[0]?.price || "-"}
                                      </span>
                                      <div data-v-14070165>
                                        <span className="d-block text-center text-lowercase mini-rate">
                                          <span>
                                            {" "}
                                            {data?.[key]?.[1]?.ex
                                              ?.availableToLay?.[0]?.size ||
                                              "-"}
                                          </span>
                                        </span>
                                      </div>
                                    </span>
                                  </span>
                                </span>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
