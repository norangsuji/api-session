import React, { useEffect, useState } from "react";
import { fetchData } from "../AreaCrimesRequest";
import styled from "styled-components";

const AreaCrimes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(1, 10, "json");
      if (result && result.data) {
        setData(result.data);
      } else {
        setData([]); // 응답이 없을 때 빈 배열 설정
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!data.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <Container>
      <Title>경찰청_범죄 발생 서울 통계</Title>
      {data.map((item, index) => (
        <li key={index}>
          {item.범죄대분류} - {item.범죄중분류} - {item.서울}
        </li>
      ))}
    </Container>
  );
};

export default AreaCrimes;

const Container = styled.div`
  padding: 1vh 4vh 4vh 5vh;
  border-radius: 5vh;
  background-color: #bed1f5;
`;

const Title = styled.div`
  font-size: 2vh;
  font-weight: 900;
  color: #2b2b2b;
  margin: 2vh 0vh 1vh 0vh;
`;
