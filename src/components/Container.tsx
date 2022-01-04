/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";

type Props = {};

const Container: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    display: block;
    flex: wrap;
    height: 90vh;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1367px) {
      display: flex;
    }
  `;

  return <div css={style}>{children}</div>;
};

export default Container;
