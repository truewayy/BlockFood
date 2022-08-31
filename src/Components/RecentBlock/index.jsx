import * as Styled from "./styled";
import Slide from "../Slide";

const RecentBlock = () => {
  return (
    <Styled.FlexContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
        }}
      >
        <img
          src="virusBg2.svg"
          alt="virus1"
          width={350}
          style={{ position: "absolute", right: "-10%", top: "5%" }}
        />
        <img
          src="virusBg1.svg"
          alt="virus2"
          width={350}
          style={{ position: "absolute", left: "-10%", top: "40%" }}
        />
        <Styled.MainText id="top">
          " 최근 <Styled.CustomSpan>위해 식품</Styled.CustomSpan>은
        </Styled.MainText>
        <Slide />
        <Styled.MainText id="bottom">입니다 "</Styled.MainText>{" "}
      </div>
    </Styled.FlexContainer>
  );
};

export default RecentBlock;
