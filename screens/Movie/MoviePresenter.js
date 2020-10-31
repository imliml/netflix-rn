import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { Dimensions, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;
const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const Text = styled.Text``;

const MoviePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <Header>
        <Swiper controlsEnabled={false} loop timeout={3}>
          <Section>
            <Text>Hello1</Text>
          </Section>
          <Section>
            <Text>Hello2</Text>
          </Section>
          <Section>
            <Text>Hello3</Text>
          </Section>
        </Swiper>
      </Header>
    )}
  </Container>
);

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default MoviePresenter;
