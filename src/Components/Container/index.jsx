import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";
import Account from "../Account";
import styled from "styled-components";
import Extract from "../Extract";

const Container = styled.div`
background-color: ${ ({theme}) => theme.body};
min-height: 90vh;
padding: 20px 15vw;
`;

const Content = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
color: ${ ({theme}) => theme.text};

@media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Title>Hi, there!</Title>
      <Subtitle>Welcome back!</Subtitle>
      <Content>
        <Account/>
        <Extract/>
      </Content>
    </Container>
  );
};
