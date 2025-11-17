/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";

const MainLayout = () => {
  return (
    <div id="__nuxt">
      <div id="__layout">
        <div
          data-v-d623efb6
          data-app="true"
          className="v-application v-application--is-ltr theme--dark"
          id="app"
        >
          <div className="v-application--wrap">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
