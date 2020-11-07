import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Dimensions, Image } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
`;

const Slide = ({ id, title, backgroundImage, votes, overview }) => {
  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
