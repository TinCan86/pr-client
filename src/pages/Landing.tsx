/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { FunctionComponent, useState, useEffect } from "react";
import Container from "../components/Container";
import Table from "../components/Table";
import TableContent from "../components/TableContent";
import Spinner from "../components/Spinner";
import Search from "../components/Search";

//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import { Project } from "../models/index";
import repoData from "../tests/repo";

const contentStyle = css`
  margin: auto;
  max-height: 520px;
  overflow-y: auto;
  width: 842px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #634aaf;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #634aaf;
  }
`;

const LandingView: FunctionComponent = () => {
  //const { data, error } = usePullrequestData();
  const [data, setData] = useState<Project[] | null>(null);
  const [nameFilter, setNameFilter] = React.useState<string | null>(null);

  // useEffect(() => {
  //   setData(repoData);
  // }, [repoData]);

  useEffect(() => {
    fetch("https://calm-wave-29148.herokuapp.com/pullrequests")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("Data: ", data);

  if (!data)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  const filterDevices = data.filter((item) => {
    const repositoryName = (url: string) => {
      const name = url.split("/");
      return name[5];
    };

    const repoName = repositoryName(item.Url);

    if (nameFilter != null) {
      return repoName != null
        ? repoName?.toLowerCase().includes(nameFilter)
        : false;
    } else {
      return true;
    }
  });

  const dataList = filterDevices.map((item, index) => {
    const repositoryName = (url: string) => {
      const name = url.split("/");
      return name[5];
    };

    const repoName = repositoryName(item.Url);

    return (
      <TableContent
        index={index}
        repository={repoName}
        title={item.Title}
        url={item.Url}
        pullRequestNumber={item.PullRequestNumber.toString()}
        status={item.Status}
      />
    );
  });

  return (
    <Container>
      <Search
        value={nameFilter || ""}
        placeholder="Search for repository..."
        onChange={(e: any) => {
          const nextValue = e.target.value;
          setNameFilter(nextValue === "" ? null : nextValue);
        }}
      />
      <div css={contentStyle}>
        {data === null ? (
          <Spinner />
        ) : (
          <div>
            <Table>{dataList}</Table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LandingView;
