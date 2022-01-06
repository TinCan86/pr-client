/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors"

type Props = {
  title: string;
  url: string;
  pullRequestNumber: string;
  status: string;
  index: number;
};

const TableContent: FunctionComponent<Props> = ({
  children,
  title,
  url,
  pullRequestNumber,
  status,
  index
}) => {
  const style = css`
    border-bottom: 1px solid #dddddd;
    
    &:nth-of-type(even) {
      background-color: #f3f3f3;
    }

    &:last-of-type {
      border-bottom: 2px solid ${colors.green};
    }

    td {
        padding: 12px 15px;

        &:nth-of-type(1), &:nth-of-type(2) {
            text-align: left;
        }
    }
  `;

  const cleanUrl = (url: string): string => {
    console.log(url);
    const test = url.split('/');
    console.log("After split: ", test[5])
    return url.replace('api.', '').replace('/repos','').replace('pulls','pull');
  }

  const repositoryName = (url: string) => {
      const name = url.split('/')
      return name[5]
  }

  return (
    <tr key={index} css={style}>
        <td>{pullRequestNumber}</td>
        <td>{repositoryName(url)}</td>
        <td>{title}</td>
        <td>{status}</td> 
        <td><a href={cleanUrl(url)} target="_blank" >Link</a></td>
    </tr>
  );
};

export default TableContent;
