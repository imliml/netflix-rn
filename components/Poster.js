import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { apiImage } from "../api";

const PosterImg = styled.Image`
  width: 100px;
  height: 140px;
  border-radius: 4px;
`;

const Poster = ({ url }) => <PosterImg source={{ uri: apiImage(url) }} />;

Poster.propTypes = {
  url: PropTypes.string,
};

export default Poster;
