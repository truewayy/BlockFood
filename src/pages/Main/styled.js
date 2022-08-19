import styled, { keyframes } from "styled-components";
import Background from "../../img/background.jpg";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Background});
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StyledLogo = styled.img`
  position: absolute;
  width: 100px;
  top: 5%;
  left: 8%;
  cursor: pointer;
`;

const ScrollDown = keyframes`
  0% {
    bottom: -12%;
  }
  50% {
    bottom: -13%;
  }
  100% {
    bottom: -14%;
  }
`;

export const Icon = styled.img`
  color: #fff;
  width: 55px;
  &#circle {
    width: 16px;
    margin-top: 70px;
  }
  &#scroll {
    position: relative;
    bottom: -12%;
    width: 42px;
    cursor: pointer;
    animation: ${ScrollDown} 0.5s 1s infinite linear alternate;
  }
`;

export const StyledBr = styled.br``;

export const MainText = styled.div`
  font-family: YDestreet;
  font-weight: 700;
  font-size: 60px;
  text-align: center;
  margin-top: 38px;
  line-height: 65px;
  letter-spacing: 3px;
  color: #fff;
  z-index: 90;
  &#sub {
    font-size: 16px;
    margin-top: 10px;
    letter-spacing: 0.9px;
    line-height: 36px;
  }
  &#bottom {
    position: relative;
    bottom: -5%;
    font-family: NotoSansKR;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.8px;
  }
`;
