import React from "react";
import { View, Text, Button } from "react-native";

const Movie = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Go to Detail"
      />
    </View>
  );
};

export default Movie;
