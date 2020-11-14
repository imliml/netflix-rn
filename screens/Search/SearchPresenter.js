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
    <Container>
      <Input
        placeholder={"Write a keyword"}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <HorizontalSlider title="Movie Results">
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Shows Results">
        {shows.map((item) => (
          <Vertical
            key={item.id}
            id={item.id}
            poster={item.poster_path}
            title={item.original_name}
            votes={item.vote_average}
          />
        ))}
      </HorizontalSlider>
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
