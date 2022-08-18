import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 90%;
`;

export const MainText = styled.div`
  font-family: NotoSansKR;
  font-size: 72px;
  font-weight: bold;
  &#top {
    margin-right: auto;
  }
  &#bottom {
    margin-left: auto;
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
