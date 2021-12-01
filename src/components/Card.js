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

const CardOverlay = styled.div``;

const CardContent = styled.div``;

const CardTitle = styled.p``;

const CardDescription = styled.p``;
