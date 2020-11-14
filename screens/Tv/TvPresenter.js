import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const Container = styled.View``;

const PopularContainer = styled.View`
  margin-top: 20px;
`;

const TvPresenter = ({
  today,
  popular,
  topRated,
  thisWeek,
  loading,
  error,
}) => {
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex",
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <>
          <Container>
            <Title title={"Today Shows"} />
            <ScrollView
              style={{ marginTop: 15, marginBottom: 20 }}
              contentContainerStyle={{ paddingLeft: 15 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {today.map((item) => (
                <Vertical
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                  title={item.original_name}
                  votes={item.vote_average}
                />
              ))}
            </ScrollView>
            <Title title={"This Week"} />
            <ScrollView
              style={{ marginTop: 15, marginBottom: 20 }}
              contentContainerStyle={{ paddingLeft: 15 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {thisWeek.map((item) => (
                <Vertical
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                  title={item.original_name}
                  votes={item.vote_average}
                />
              ))}
            </ScrollView>
            <Title title={"TopRated Shows"} />
            <ScrollView
              style={{ marginTop: 15, marginBottom: 20 }}
              contentContainerStyle={{ paddingLeft: 15 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {topRated.map((item) => (
                <Vertical
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                  title={item.original_name}
                  votes={item.vote_average}
                />
              ))}
            </ScrollView>
            <Title title={"Popular Shows"} />
            <PopularContainer>
              {popular.map((item) => (
                <Horizontal
                  key={item.id}
                  id={item.id}
                  title={item.original_name}
                  votes={item.vote_average}
                  poster={item.poster_path}
                  overview={item.overview}
                  releaseDate={item.first_air_date}
                />
              ))}
            </PopularContainer>
          </Container>
        </>
      )}
    </ScrollView>
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
