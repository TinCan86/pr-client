/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, {
   FunctionComponent,
   useState,
   useEffect,
} from "react";
import Container from "../components/Container";
import Table from "../components/Table";
import Title from "../components/Title";
import H2 from "../components/H2";
import TableContent from "../components/TableContent";

//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import { Project } from "../models/index";
import repoData from "../tests/repo";

const test = css`
    height: 400px;
    max-height: 400px;
    overflow-y: auto;
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
        <TableContent index={index} title={item.Title} url={item.Url} pullRequestNumber={item.PullRequestNumber.toString()} status={item.Status} />
    );
  });

  return (
    <Container>
      <div>
      <Title />
        <div css={test}>
        <H2>Open pullrequests</H2>
        <Table>
          {dataList}
        </Table>
        </div>
      </div>
    </Container>
  );
};

export default LandingView;
