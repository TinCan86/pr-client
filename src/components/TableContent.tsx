/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors"

type Props = {
  title: string;
  url: string;
  repository: string;
  pullRequestNumber: string;
  status: string;
  index: number;
};

const TableContent: FunctionComponent<Props> = ({
  children,
  title,
  url,
  repository,
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
      font-family: Brezel-Regular;

        padding: 12px 15px;

        &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3) {
            text-align: left;
        }
    }

    a { 
      text-decoration: none;
      border-radius: 5px;
      line-height: 20px;
      color: white;
      background-color: ${colors.purple};
      padding: 8px;
      font-size: 10px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      transition: 0.2s all;

      &:hover {
        background-color: ${colors.darkPurple};
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);

      }
    }
  `;

  const cleanUrl = (url: string): string => {
    return url.replace('api.', '').replace('/repos','').replace('pulls','pull');
  }

  return (
    <tr key={index} css={style}>
        <td>{pullRequestNumber}</td>
        <td>{repository}</td>
        <td>{title}</td>
        <td>{status}</td> 
        <td><a href={cleanUrl(url)} target="_blank" >Review</a></td>
    </tr>
  );
};

export default TableContent;
