import React from "react";
import { Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import ScrollContainer from "../../components/ScrollContainer";
import styled from "styled-components/native";
import Votes from "../../components/Votes";
import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import { formatDate } from "../../utils";
import Link from "../../components/Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 5px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const DetailPresenter = ({ result, loading, openBrowser }) => {
  return (
    <ScrollContainer
      loading={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <>
        <Header>
          <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
          <Container>
            <Poster url={result.poster} />
            <Info>
              <Title>{result.title}</Title>
              {result.votes && <Votes votes={result.votes} />}
            </Info>
          </Container>
        </Header>
        <Data>
          {result.overview && (
            <>
              <DataName>Overview</DataName>
              <DataValue>{result.overview}</DataValue>
            </>
          )}
          {loading && (
            <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
          )}
          {result.spoken_languages && (
            <>
              <DataName>Languages</DataName>
              <DataValue>
                {result.spoken_languages.map((item) => `${item.name} `)}
              </DataValue>
            </>
          )}
          {result.release_date ? (
            <>
              <DataName>Release Date</DataName>
              <DataValue>{formatDate(result.release_date)}</DataValue>
            </>
          ) : (
            <>
              <DataName>First Air Date</DataName>
              <DataValue>{formatDate(result.first_air_date)}</DataValue>
            </>
          )}
          {result.imdb_id && (
            <Link
              text={"IMDB Page"}
              icon={"imdb"}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
            />
          )}
          {result.videos.results?.length > 0 && (
            <>
              <DataName>Videos</DataName>
              {result.videos.results.map((video) => (
                <Link
                  text={video.name}
                  key={video.key}
                  icon="youtube-play"
                  onPress={() =>
                    openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                  }
                />
              ))}
            </>
          )}
          {result.status && (
            <>
              <DataName>Status</DataName>
              <DataValue>{result.status}</DataValue>
            </>
          )}
          {result.runtime ? (
            <>
              <DataName>Run Time</DataName>
              {result.runtime ? (
                <DataValue>{result.runtime}분</DataValue>
              ) : (
                <DataValue>정보가 없습니다.</DataValue>
              )}
            </>
          ) : (
            <>
              <DataName>Episode Run Time</DataName>
              {result.episode_run_time ? (
                <DataValue>{result.episode_run_time[0]}분</DataValue>
              ) : (
                <DataValue>정보가 없습니다.</DataValue>
              )}
            </>
          )}
          {result.genres && (
            <>
              <DataName>genres</DataName>
              <DataValue>
                {result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
              </DataValue>
            </>
          )}
          {result.number_of_episodes && (
            <>
              <DataName>Number of episodes</DataName>
              <DataValue>{result.number_of_episodes}편</DataValue>
            </>
          )}
        </Data>
      </>
    </ScrollContainer>
  );
};

export default DetailPresenter;
