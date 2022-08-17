import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const SideDiv = styled.div`
  width: 7%;
  position: fixed;
  right: 3rem;
  margin-top: 20%;
  color: #e2e2e2;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const CustomLink = styled(Link)`
  padding: 5px 0px;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: #009944;
  }
`;

const CustomList = styled.div``;

const SideBar = () => {
  const page = [
    { id: "home", name: "홈" },
    { id: "recent", name: "위해식품" },
    { id: "search", name: "검색" },
    { id: "info", name: "차단/회수정보" },
  ];
  return (
    <SideDiv style={{ zIndex: "1" }}>
      <div>
        {page.map((v) => {
          return (
            <CustomLink to={v.id} spy={true} smooth={true}>
              <CustomList>{v.name}</CustomList>
            </CustomLink>
          );
        })}
      </div>
    </SideDiv>
  );
};

export default SideBar;
