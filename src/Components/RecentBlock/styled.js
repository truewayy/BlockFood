import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const MainText = styled.div`
  font-family: Noto Sans KR;
  font-size: 72px;
  font-weight: bold;
  &#top {
    margin-right: auto;
    margin-bottom: 5vh;
  }
  &#bottom {
    margin-left: auto;
    margin-top: -5vh;
  }
`;

export const CustomSpan = styled.span`
  display: inline-block;
  position: relative;
  color: #fff;
  ::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    top: calc(50% - 26%);
    left: 0;
    width: 100%;
    height: 60%;
    background-color: #009944;
  }
`;

export const Wrapper = styled.div`
  width: 40%;
`;

export const SlickBox = styled.div`
  text-align: center;
`;
export const SlickContent = styled.div`
  font-size: 2rem;
  display: flex;
  height: 300px;
  justify-content: center;
`;

export const ContentBox = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  align-items: center;
`;
