/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";

type Props = {};

const Title: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    position: absolute;
    top: 0;

    color: #fff;
    font-size: 32px;
    z-index: 1;

    @media screen and (min-width: 1367px) {
      font-size: 62px;
    }
  `;

  return <h1 css={style}>{children}</h1>;
};

export default Title;
