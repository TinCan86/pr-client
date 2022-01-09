/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../variables/colors";

type Props = {};

const Spinner: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    text-align: -webkit-center;

    .reverse-spinner {
      position: relative;
      height: 100px;
      width: 100px;
      border: 4px solid transparent;
      border-top-color: #29bf98;
      border-left-color: #4b95a1;
      border-radius: 50%;
      -webkit-animation: spin 1.5s linear infinite;
      animation: spin 1.5s linear infinite;
    }

    .reverse-spinner::before {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      content: "";
      border: 4px solid transparent;
      border-top-color: #ffffff;
      border-left-color: #dbdbdb;
      border-radius: 50%;
      -webkit-animation: spinBack 1s linear infinite;
      animation: spinBack 1s linear infinite;
    }

    -webkit-@keyframes spin {
      -webkit-from {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      -webkit-to {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes spinBack {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(-720deg);
        transform: rotate(-720deg);
      }
    }

    @keyframes spinBack {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(-720deg);
        transform: rotate(-720deg);
      }
    }

    p {
      margin-top: 35px;
      font-family: Brezel-Bold;
      width: 100%;
      color: white;
      font-size: 16px;
      display: block;
    }
  `;

  return (
    <React.Fragment>
      <div css={style}>
        <div>
          <div className="reverse-spinner"></div>
        </div>

        <div>
          <div className="hm-spinner"></div>
        </div>
        <p>Loading..</p>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
