/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";

type Props = {
  title: string;
  number: string | null;
  text: string;
};

const Card: FunctionComponent<Props> = ({ title, text, number }) => {
  const style = css`
    
  `;

  return (
    <div css={style}>
      <div className="card">
        <div className="content">
          <h2>{number ? number : "Null"}&#8451;</h2>
          <h3>{title}</h3>
          <h4>{number ? number : "Null"}&#8451;</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
