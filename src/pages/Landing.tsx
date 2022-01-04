import React, { FunctionComponent, useState, useEffect } from "react";
import Title from "../components/Title";
//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import { Project } from "../models/index";
import { usePullrequestData } from "../hooks/usePullrequestData";

const LandingView: FunctionComponent = () => {
  const { data, error } = usePullrequestData();

  console.log("Data: ", data)

  if (!data) return <p>Loading</p>;

  if (error != null) return <p>error: {error}</p>;

  // const filtered = JSON.stringify(openPrs, null, 2);
  // console.log(filtered);

  return (
    <React.Fragment>
      <Title>PR Data in ImBox</Title>
      <p>{data}</p>
    </React.Fragment>
  );
};

export default LandingView;
