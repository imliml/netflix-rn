import React, { useState, useEffect } from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../api";

const TvContainer = ({ navigation }) => {
  const [tv, setTv] = useState({
    today: [],
    popular: [],
    topRated: [],
    thisWeek: [],
    todayError: null,
    popularError: null,
    topRatedError: null,
    thisWeekError: null,
    loading: true,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();

    setTv({
      loading: false,
      today,
      popular,
      topRated,
      thisWeek,
      todayError,
      popularError,
      topRatedError,
      thisWeekError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <TvPresenter {...tv} />;
};

export default TvContainer;
