import React, { useState, useEffect, useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { View, Text } from "react-native";
import { movieApi, tvApi } from "../../api";

const DetailContainer = ({
  navigation,
  route: {
    params: { id, title, votes, backgroundImage, poster, overview },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const [movie, setMovie] = useState({
    title,
    votes,
    backgroundImage,
    poster,
    overview,
  });

  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.detail(id);
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

  return <DetailPresenter {...movie} />;
};

export default DetailContainer;
