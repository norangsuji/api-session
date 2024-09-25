import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Police from "../Img/police.png";
import AreaCrimes from "../components/AreaCrimeView";
import SiteCrimes from "../components/SiteCrimeView";

function Main() {
  return (
    <Container>
      <StyledImage src={Police} alt="Sun" />
      <Title>서울시/범죄 장소별 범죄 발생 수</Title>
      <ItemBox>
        <AreaCrimes></AreaCrimes>
        <SiteCrimes></SiteCrimes>
      </ItemBox>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2vh;
`;

const Title = styled.div`
  font-size: 4vh;
  font-weight: 900;
  color: #2b2b2b;
`;

const StyledImage = styled.img`
  width: 20vh;
  height: auto;
  margin-bottom: 1vh;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3vh;
`;
