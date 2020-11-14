import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px
  padding: 10px 20px
  border-radius: 15px
  margin-bottom: 20px
`;

const input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      onSubmitEditing={onSubmit}
      returnKeyType={"search"}
    />
  );
};

input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default input;
