import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showsError: null,
  });

  const onChange = (text) => setKeyword(text);
  const onSubmit = async () => {
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showsError,
    });
    console.log(movies);
  };

  return (
    <SearchPresenter
      keyword={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
      {...results}
    />
  );
};

export default SearchContainer;
