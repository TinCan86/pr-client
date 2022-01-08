/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";

type Props = {};

const Title: FunctionComponent<Props> = ({ children }) => {
  const style = css`
  width: 100%;
    text-align: center;
    color: #fff;
    font-size: 82px;
    margin-top: 50px;
    position: absolute;
    top: 0;
  `;

  return (
    <h1 css={style}>
      <img src="logotype-white.svg" />
      {children}
    </h1>
  );
};

export default Title;
