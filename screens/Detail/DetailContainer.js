import React, { useState, useEffect, useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { View, Text } from "react-native";
import { movieApi, tvApi } from "../../api";

const DetailContainer = ({
  navigation,
  route: {
    params: { id, isTv, title, votes, backgroundImage, poster, overview },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  console.log(isTv);

  const [movie, setMovie] = useState({
    title,
    votes,
    backgroundImage,
    poster,
    overview,
  });

  const getData = async () => {
    // if (isTv) {
    //   const [getMovie, getMovieError] = await tvApi.detail(id);
    // } else {
    //   const [getMovie, getMovieError] = await movieApi.detail(id);
    // }

    const [getMovie, getMovieError] = isTv
      ? await tvApi.detail(id)
      : await movieApi.detail(id);

    setMovie({
      ...getMovie,
      title: getMovie.title,
      votes: getMovie.vote_average,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      overview: getMovie.overview,
    });

    setResult(results);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return <DetailPresenter movie={movie} />;
};

export default DetailContainer;
