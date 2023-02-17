import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID="1"
        title="UpComing"
        fetchURL={requests.requestUpcoming}
        isLargeRow
      />

      <Row
        rowID="2"
        title="Action"
        fetchURL={requests.requestAction}
        isLargeRow
      />
      <Row
        rowID="3"
        title="Trending"
        fetchURL={requests.requestTrending}
        isLargeRow
      />
      <Row
        rowID="4"
        title="Top Rated"
        fetchURL={requests.requestTopRated}
        isLargeRow
      />
      <Row
        rowID="5"
        title="Horror"
        fetchURL={requests.requestHorror}
        isLargeRow
      />
    </>
  );
};

export default Home;
