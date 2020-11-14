import React from "react";
import DetailPresenter from "./DetailPresenter";
import { View, Text } from "react-native";
import { movieApi, tvApi } from "../../api";

const DetailContainer = ({
  navigation,
  route: {
    params: { id, title },
  },
}) => {
  navigation.setOptions({ title });

  const getData = async () => {
    const results = await movieApi.detail(id);
  };

  return <DetailPresenter title={title} votes={4.5} />;
};

export default DetailContainer;
