import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterBar from "./Components/Footer";
import Main from "./pages/Main/index";
import RecentBlock from "./Components/RecentBlock/index";
import Search from "./Components/Search/index";
import Information from "./Components/Informaition/index";
import SideBar from "./Components/SideBar/index";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import $ from "jquery";
import FoodDetail from "./pages/Main/FoodDetail";

/*기능정의
해외위해식품 회수정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx


해외직구 차단정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx
*/
const App = () => {
  $(() => {
    $("#fullpage").fullpage({
      scrollOverflow: true,
      navigation: false,
      navigationTooltips: ["홈", "위해식품", "검색", "차단/회수정보"],
      showActiveTooltip: true,
      anchors: ["home", "recent", "search", "info"],
      keyboardScrolling: false,
    });
  });

  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <div id="fullpage">
              <div className="section" data-anchors="home">
                <Main />
              </div>
              <div className="section" data-anchors="recent">
                <RecentBlock />
              </div>
              <div className="section" data-anchors="search">
                <Search />
              </div>
              <div className="section" data-anchors="info">
                <Information />
                <FooterBar />
              </div>
            </div>
          }
        />
        <Route path="/detail" element={<FoodDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
