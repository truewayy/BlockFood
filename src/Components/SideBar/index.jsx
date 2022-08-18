import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
const SideDiv = styled.div`
  width: 7%;
  position: fixed;
  right: 3rem;
  margin-top: 2%;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const FormCheckText = styled.span`
  display: flex;
  padding: 5px 0px;
  color: #e2e2e2;
  cursor: pointer;
`;

const CustomLink = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked + ${FormCheckText} {
    color: #009944;
  }
  &:hover + ${FormCheckText} {
    color: #009944;
  }
`;

const SideBar = () => {
  const page = [
    { id: "home", name: "홈" },
    { id: "recent", name: "위해식품" },
    { id: "search", name: "검색" },
    { id: "info", name: "차단/회수정보" },
  ];
  const [scroll, setScroll] = useState("home");

  useEffect(() => {
    setScroll(window.location.href.split("#")[1]);
  }, [window.location.pathname]);
  console.log(window.location.href);
  return (
    <SideDiv style={{ zIndex: "1" }}>
      <form
        onChange={(e) => {
          setScroll(e.target.value);
          window.location.href = "#" + e.target.value;
        }}
      >
        {page.map((v) => {
          return (
            <label>
              <CustomLink name="page" value={v.id} checked={v.id === scroll} />
              <FormCheckText>{v.name}</FormCheckText>
            </label>
          );
        })}
      </form>
    </SideDiv>
  );
};

export default SideBar;
