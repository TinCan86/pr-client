/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors";

type Props = {};

const Container: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    display: block;
    flex: wrap;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.purple};

    @media screen and (min-width: 1367px) {
      display: flex;
    }
  `;

  return <div css={style}>{children}</div>;
};

export default Container;
