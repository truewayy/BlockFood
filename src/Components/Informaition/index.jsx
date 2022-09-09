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
      <div style={{ width: "60%" }}>
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
      </div>

      <Slide />
      <table>
        <tr>
          <td>제품이름</td>
          <td>위해성분명</td>
          <td>차단일자</td>
        </tr>
      </table>
    </Styled.FlexContainer>
  );
};

export default Information;
