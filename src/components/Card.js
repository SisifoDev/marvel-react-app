import React from "react";
import styled from "styled-components";

export const Card = ({ title, date, img }) => {
  return (
    <CardContainer img={img}>
      <CardOverlay>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardContent>
      </CardOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  width: 320px;
  height: 430px;

  /* transform: translate(-50%, -50%); */
  background: url(${(props) => props.img}) center / cover;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const CardOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    rgba(151, 152, 152, 0.2) 100%
  );
  border-radius: 8px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: coral;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 0;
  color: aliceblue;
`;
