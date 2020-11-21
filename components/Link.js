import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: white;
`;

const Link = ({ onPress, text, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <FontAwesome name={icon} color="white" size={22} />
        <Text>{text}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Link;
