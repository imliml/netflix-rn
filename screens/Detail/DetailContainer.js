import React, { useState, useEffect, useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { View, Text } from "react-native";
import { movieApi, tvApi } from "../../api";
import * as WebBrowser from "expo-web-browser";

const DetailContainer = ({
  navigation,
  route: {
    params: { id, isTv, title, votes, backgroundImage, poster, overview },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      votes,
      backgroundImage,
      poster,
      overview,
      videos: {
        results: [],
      },
    },
  });

  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.detail(id)
      : await movieApi.detail(id);

    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        votes: getDetail.vote_average,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return <DetailPresenter openBrowser={openBrowser} {...detail} />;
};

export default DetailContainer;
