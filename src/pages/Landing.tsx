import React, { FunctionComponent, useState, useEffect } from "react";
import Title from "../components/Title";
//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import axios from 'axios';

const LandingView: FunctionComponent = () => {
  //const { data, error } = usePullrequestData();
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://calm-wave-29148.herokuapp.com/pullrequests',
      );
      console.log(result);
      
      setData(result.data);
    };

    fetchData();
  }, []);
  console.log("Data: ", data)

  if (!data) return <p>Loading</p>;

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
