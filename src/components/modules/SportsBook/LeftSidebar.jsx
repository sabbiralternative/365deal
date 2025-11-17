import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { valueByLanguage } = useLanguage();
  const { eventTypeId } = useParams();
  const eventName = {
    4: languageValue(valueByLanguage, LanguageKey.CRICKET),
    2: languageValue(valueByLanguage, LanguageKey.TENNIS),
    1: languageValue(valueByLanguage, LanguageKey.FOOTBALL),
    5: languageValue(valueByLanguage, LanguageKey.KABADDI),
  };

  return (
    <div data-v-a3b6f728 className="col-md-3 col-lg-2 col-12 pt-2 pr-0">
      <div data-v-54fd2d1b data-v-a3b6f728>
        <div data-v-54fd2d1b className="pa-0 mobileTabs mb-2">
          <div
            data-v-54fd2d1b
            role="list"
            className="v-list left-panel pa-0 rounded d-flex vertical-list v-sheet theme--dark pa-0"
          >
            <div
              data-v-54fd2d1b
              className="col-12 pa-0 games game-left two py-4"
            >
              <a
                data-v-54fd2d1b
                aria-current="page"
                className="v-list-item--active v-list-item v-list-item--link theme--dark"
                tabIndex={0}
                role="listitem"
              >
                <div
                  data-v-54fd2d1b
                  className="v-avatar v-list-item__avatar rounded-0 v-avatar--tile"
                  style={{
                    height: "22px",
                    minWidth: "22px",
                    width: "22px",
                  }}
                >
                  <i
                    data-v-54fd2d1b
                    aria-hidden="true"
                    className="v-icon notranslate mdi mdi-home theme--dark"
                  />
                </div>
                <div data-v-54fd2d1b className="v-list-item__content">
                  <div data-v-54fd2d1b className="v-list-item__title">
                    Sports
                  </div>
                </div>
              </a>
              <a
                data-v-54fd2d1b
                aria-current="page"
                className="primary v-list-item--active v-list-item v-list-item--dense v-list-item--link theme--dark"
                tabIndex={0}
                id="game"
                role="listitem"
              >
                <div
                  data-v-54fd2d1b
                  className="v-avatar v-list-item__avatar rounded-0 v-avatar--tile"
                  style={{
                    height: "22px",
                    minWidth: "22px",
                    width: "22px",
                  }}
                >
                  <div
                    data-v-54fd2d1b
                    className="v-image v-responsive theme--dark"
                  >
                    <div
                      className="v-responsive__sizer"
                      style={{ paddingBottom: "100%" }}
                    />
                    <div
                      className="v-image__image v-image__image--contain"
                      style={{
                        backgroundImage:
                          'url("https://365deal.in/_nuxt/img/cricket.4175220.webp")',
                        backgroundPosition: "center center",
                      }}
                    />
                    <div
                      className="v-responsive__content"
                      style={{ width: "128px" }}
                    />
                  </div>
                </div>
                <div data-v-54fd2d1b className="v-list-item__content">
                  <div data-v-54fd2d1b className="v-list-item__title">
                    {eventName[eventTypeId]}
                  </div>
                </div>
              </a>
              <div
                onClick={() => navigate(-1)}
                data-v-54fd2d1b
                tabIndex={0}
                id="previous"
                role="listitem"
                className="primary-lighten v-list-item v-list-item--dense v-list-item--link theme--dark"
              >
                <div
                  data-v-54fd2d1b
                  className="v-avatar v-list-item__avatar rounded-0 v-avatar--tile"
                  style={{
                    height: "22px",
                    minWidth: "22px",
                    width: "22px",
                  }}
                >
                  <i
                    data-v-54fd2d1b
                    aria-hidden="true"
                    className="v-icon notranslate mdi mdi-chevron-left theme--dark"
                  />
                </div>
                <div data-v-54fd2d1b className="v-list-item__content">
                  <div data-v-54fd2d1b className="v-list-item__title">
                    Previous
                  </div>
                </div>
              </div>
              <div data-v-54fd2d1b />
            </div>
          </div>
        </div>
        <div data-v-54fd2d1b className="fav"></div>
      </div>
    </div>
  );
};

export default LeftSidebar;
