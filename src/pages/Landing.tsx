import React, {
   FunctionComponent,
   useState,
   useEffect,
} from "react";
import Container from "../components/Container";
import Title from "../components/Title";
//import { getPullRequestsFromRepos, getGitHubRepos } from "../utils/api";
import { Project } from "../models/index";
import repoData from "../tests/repo";

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
      <div key={index}>
        <p>{item.Title}</p>
        <p>{item.Status}</p>
        <p>{item.PullRequestNumber.toString()}</p>
        <p>{item.Url}</p>
      </div>
    );
  });

  return (
    <Container>
      <div>
        {" "}
        <Title>PR Data in ImBox </Title>
        {dataList}
      </div>
    </Container>
  );
};

export default LandingView;
