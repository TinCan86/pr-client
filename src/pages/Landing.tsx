/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { FunctionComponent, useState, useEffect } from "react";
import Container from "../components/Container";
import Table from "../components/Table";
import Title from "../components/Header";
import H2 from "../components/H2";
import TableContent from "../components/TableContent";

//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import { Project } from "../models/index";
import repoData from "../tests/repo";

const contentStyle = css`
  height: 400px;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);

  /* width */
  &::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #634aaf;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #634aaf;
  }
`;

const LandingView: FunctionComponent = () => {
  //const { data, error } = usePullrequestData();
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    setData(repoData);
  }, [repoData]);

  // useEffect(() => {
  //   fetch("https://calm-wave-29148.herokuapp.com/pullrequests")
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  console.log("Data: ", data);

  if (!data) return <p>Loading</p>;

  // const filterDevices = devices.filter((device) => {
  //   if (nameFilter != null) {
  //     return device.xot_id != null
  //       ? device.device_name?.toLowerCase().includes(nameFilter)
  //       : false;
  //   } else {
  //     return true;
  //   }
  // });

  const dataList = data.map((item, index) => {
    return (
      <TableContent
        index={index}
        title={item.Title}
        url={item.Url}
        pullRequestNumber={item.PullRequestNumber.toString()}
        status={item.Status}
      />
    );
  });

  return (
    <Container>
      <div css={contentStyle}>
        <Table>{dataList}</Table>
      </div>
    </Container>
  );
};

export default LandingView;
