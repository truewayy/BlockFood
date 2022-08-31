import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 50px;
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
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: flex-end;
  padding-bottom: 50px;
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

export const FormCheckText = styled.span`
  font-size: 20px;
  width: 190px;
  height: 50px;
  border: 2px solid #009944;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #009944;
`;

export const RaidoButton = styled.input.attrs({ type: "radio" })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked + ${FormCheckText} {
    background-color: #009944;
    color: #fff;
  }
  display: none;
`;
