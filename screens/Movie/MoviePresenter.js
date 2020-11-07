import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

const MoviePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.title}
                backgroundImage={movie.backdrop_path}
                votes={movie.vote_average}
                overview={movie.overview}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SliderContainer>
        <Container>
          <Title title={"Popular Movies"} />
        </Container>
      </>
    )}
  </ScrollView>
);

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default MoviePresenter;
