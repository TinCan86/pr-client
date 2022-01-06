/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors";

type Props = {};

const Container: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    background-color: ${colors.purple};
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex: wrap;
    justify-content: center;
    align-items: center;
  `;

  return <div css={style}>{children}</div>;
};

export default Container;
