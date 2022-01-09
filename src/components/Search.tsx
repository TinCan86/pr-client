/** @jsxRuntime classic */
/** @jsx jsx */
import { FunctionComponent, ChangeEventHandler } from "react";
import { css, jsx } from "@emotion/react";

type Props = {
  noMargin?: boolean;
  label?: string;
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  value?: string;
  type?: string;
};

const Search: FunctionComponent<Props> = (props) => {
  const labelStyle = css`
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    display: block;
  `;

  const componentStyle = css`
  margin: auto;

  width: 840px;
    margin-top: ${props.noMargin ? "0px" : "10px"};
    margin-bottom: 20px;;
  `;

  const inputStyle = css`
  color: black;
  font-size: 13px;
  border-radius: 5px;
  font-family: Brezel-Bold;
  border: solid 1px #bbb8b8;
  padding: 0 0 0 10px;
  width: 100%;
  line-height: 46px;
  height: 46px;
  display: block;
  outline: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}
  
`;

  return (
    <div css={componentStyle}>
      <label css={labelStyle}>{props.label}</label>
      <div>
        <input
          css={inputStyle}
          value={props.value != null ? props.value : ""}
          onChange={props.onChange}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
