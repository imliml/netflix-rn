import React from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input";
import styled from "styled-components";

const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = (props) => {
  return (
    <Container>
      <Input placeholder={"Write a keyword"} />
    </Container>
  );
};

SearchPresenter.propTypes = {};

export default SearchPresenter;
