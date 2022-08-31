import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 68%;
  flex-direction: column;
  padding: 1rem 0;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 60px;
  font-family: Noto Sans KR;
  font-weight: bold;
  letter-spacing: 1.8px;
  line-height: 1.25;
  &#dot {
    justify-content: center;
    font-size: 50px;
    font-weight: 900;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 6px solid #009944;
  padding: 30px;
  margin: 3rem 0;
  font-size: 2rem;
  ::placeholder {
    color: #bfbfbf;
    font-family: Noto Sans KR;
    font-weight: 500;
  }
  &:focus {
    outline: none;
  }
`;

export const DateChoice = styled.input`
  font-size: 1.5rem;
  width: 20%;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
