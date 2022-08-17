import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterBar from "./Components/Footer";
import SideBar from "./Components/SideBar";
import Main from "./pages/Main/index";

/*기능정의
해외위해식품 회수정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx


해외직구 차단정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx
*/
const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Main />
      <FooterBar />
    </BrowserRouter>
  );
};

export default App;
