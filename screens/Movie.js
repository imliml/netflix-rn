import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { movieApi } from "../api";

const Movie = ({ navigation }) => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });

  const getData = async () => {
    const [results, error] = await movieApi.nowPlaying();
    setMovies({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{movies.results.length}</Text>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Go to Detail"
      />
    </View>
  );
};

export default Movie;
