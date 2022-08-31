import React, { useState } from "react";
import * as Styled from "./styled";
import Slide from "../Slide";

const Information = () => {
  const [type, setType] = useState("1");

  const onChange = (e) => {
    setType(e.target.value);
  };

  return (
    <Styled.FlexContainer>
      <Styled.Wrap>
        <Styled.SearchTitle>
          차단, 회수 정보를 <br />
          알아보세요!
        </Styled.SearchTitle>
        <div>
          <label>
            <Styled.RaidoButton
              type="radio"
              name="radioButton"
              checked={type === "1"}
              onChange={onChange}
              value="1"
            />
            <Styled.FormCheckText>차단정보</Styled.FormCheckText>
          </label>
          <label>
            <Styled.RaidoButton
              type="radio"
              name="radioButton"
              checked={type === "2"}
              value="2"
              onChange={onChange}
            />
            <Styled.FormCheckText id="green">회수정보</Styled.FormCheckText>
          </label>
        </div>
      </Styled.Wrap>

      <Slide />

      <div style={{ height: "500px", width: "100%" }}></div>
    </Styled.FlexContainer>
  );
};

export default Information;
