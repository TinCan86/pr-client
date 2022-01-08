/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors";

type Props = {};

const Table: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    margin: 0px 0 0px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    background-color: white;
    position: relative;
    border-collapse: collapse;
    overflow-y: auto;
    border-radius: 3px;

    thead {
      position: sticky;
      top: 0;
    }

    thead tr {
      background-color: ${colors.green};
      color: #ffffff;
      text-align: left;
    }

    th {
      font-family: Brezel-Bold;
      padding: 12px 15px;

      &:nth-of-type(5) {
        text-align: center;
      }
    }
  `;

  return (
    <table css={style}>
      <thead>
        <tr>
          <th>#</th>
          <th>Repository</th>
          <th>Pullrequest title</th>
          <th>Status</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
