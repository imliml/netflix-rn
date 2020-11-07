import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const MoviePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.title}
              backgroundImage={movie.backdrop_path}
              votes={movie.votes_average}
              overview={movie.overview}
            />
          ))}
        </Swiper>
      </>
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
