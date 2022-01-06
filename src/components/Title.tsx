/** @jsx jsx */
import { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";

type Props = {};

const Title: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    text-align: center;
    color: #fff;
    font-size: 82px;
    margin-top: 0px;
  `;

  return <h1 css={style}>
    <img src='logotype-white.svg'/>
{children}</h1>;
};

export default Title;
