import React, { FunctionComponent, useState, useEffect } from "react";
import Title from "../components/Title";
//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import { Project } from "../models/index";
import { usePullrequestData } from "../hooks/usePullrequestData";

const LandingView: FunctionComponent = () => {
  //const { data, error } = usePullrequestData();
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://calm-wave-29148.herokuapp.com/pullrequests")
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.log(err))
  }, [])

  console.log("Data: ", data)

  if (!data) return <p>Loading</p>;

  // if (error != null) return <p>error: {error}</p>;

  // const filtered = JSON.stringify(openPrs, null, 2);
  // console.log(filtered);

  // const filterDevices = devices.filter((device) => {
  //   if (nameFilter != null) {
  //     return device.xot_id != null
  //       ? device.device_name?.toLowerCase().includes(nameFilter)
  //       : false;
  //   } else {
  //     return true;
  //   }
  // });

  return (
    <React.Fragment>
      <Title>PR Data in ImBox</Title>
      {data.map((item: Project) => {
        <div>
        <p>{item.Title}</p>
        <p>{item.Status}</p>
        <p>{item.PullRequestNumber}</p>
        <p>{item.Url}</p>
        </div>
      })}
    </React.Fragment>
  );
};

export default LandingView;
