import React, { useState, useEffect } from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../api";

const MovieContainer = ({ navigation }) => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    loading: true,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.nowPlaying();
    const [upcoming, upcomingError] = await movieApi.nowPlaying();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <MoviePresenter {...movies} />;
};

export default MovieContainer;
