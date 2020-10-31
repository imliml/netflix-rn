import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const TvPresenter = ({
  today,
  popular,
  topRated,
  thisWeek,
  loading,
  error,
}) => {
  return (
    <View>
      <Text>{today.length}</Text>
    </View>
  );
};

TvPresenter.propTypes = {
  today: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  thisWeek: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TvPresenter;
