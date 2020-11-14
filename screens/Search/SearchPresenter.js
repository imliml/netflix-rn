import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import Input from "../../components/Input";
import styled from "styled-components";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";

const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = ({ movies, shows, keyword, onChange, onSubmit }) => {
  return (
    <Container
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      <Input
        placeholder={"Write a keyword"}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies && movies.length !== 0 && (
        <HorizontalSlider title={"Movie Results"}>
          {movies.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path || movie.backdrop_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}

      {shows && shows.length !== 0 && (
        <HorizontalSlider title={"Show Results"}>
          {shows.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path || show.backdrop_path}
              title={show.original_name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movies: PropTypes.array,
  shows: PropTypes.array,
  keyword: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
