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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: scale(1.2);
    }

    .card {
      position: relative;
      width: 280px;
      height: 380px;
      margin: 30px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blue(5px);
    }

    .content {
      padding: 20px;
      tex-align: center;
    }

    h2 {
      position: absolute;
      top: -140px;
      right: 10px;
      font-size: 8em;
      color: rgba(255, 255, 255, 0.05);
      pointer-events: none;
    }

    h3 {
      font-size: 1.8em;
      color: #fff;
      z-index: 1;
    }

    h4 {
      margin-bottom: 30px;
      margin-top: 30px;
      font-size: 2.5em;
      color: #fff;
      z-index: 1;
    }

    p {
      font-size: 1em;
      color: #fff;
      font-width: 300;
    }
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
