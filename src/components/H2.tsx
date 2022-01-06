/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors"

type Props = {
  
};

const H2: FunctionComponent<Props> = ({ children }) => {
  const style = css`
  text-align: left;
    color: ${colors.green};
    font-size: 16px;
    font-weight: bold;
  `;

  return (
    <h2 css={style}>{children}</h2>
  );
};

export default H2;
