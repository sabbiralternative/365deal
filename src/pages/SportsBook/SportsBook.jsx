/* eslint-disable react/no-unknown-property */
import { useGroupQuery } from "../../redux/features/events/events";
import LeftSidebar from "../../components/modules/SportsBook/LeftSidebar";
import Tab from "../../components/modules/SportsBook/Tab";
import Group from "../../components/modules/SportsBook/Group";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SportsBook = () => {
  const [tab, setTab] = useState("live");
  const { eventTypeId } = useParams();
  const { data } = useGroupQuery(
    { sportsType: Number(eventTypeId) },
    {
      pollingInterval: 1000,
    }
  );

  return (
    <main
      data-v-d623efb6
      className="v-main main-section pt-20"
      data-booted="true"
      style={{ padding: "0px" }}
    >
      <div className="v-main__wrap">
        <div data-v-478cbc02 data-v-d623efb6 />
        <div data-v-d623efb6 className="v-lazy">
          <div
            data-v-a3b6f728
            data-v-d623efb6
            className="bet-view fav-type mb-0"
          >
            <div data-v-a3b6f728 className="container max-style">
              <div data-v-a3b6f728 className="row">
                <LeftSidebar />
                <div
                  data-v-a3b6f728
                  className="col col-12 col-md-9 col-lg-10 py-0 pt-2 dual-tabs--desktop-new"
                >
                  <Tab tab={tab} setTab={setTab} data={data} />

                  <Group data={data} tab={tab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SportsBook;
