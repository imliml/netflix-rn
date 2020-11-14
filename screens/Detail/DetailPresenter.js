import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import styled from "styled-components/native";
import Votes from "../../components/Votes";

const Header = styled.View``;

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

const Info = styled.View``;

const DetailPresenter = (props) => {
  return (
    <ScrollContainer>
      <Header>
        <Container>
          <Info>
            <Title>{props.title}</Title>
            <Votes votes={props.votes} />
          </Info>
        </Container>
      </Header>
    </ScrollContainer>
  );
};

export default DetailPresenter;
