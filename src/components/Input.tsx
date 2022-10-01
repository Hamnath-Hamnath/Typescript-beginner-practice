import React from "react";

const Input = (props: InputProps) => {
  return (
    <>
      <input
        value={props.value}
        onChange={(event) => props.handleChange(event, "hamnath")}
      />
      {props.children}
    </>
  );
};

export default Input;

type InputProps = {
  value: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: string
  ) => void;
  children: React.ReactNode;
  styles?: React.CSSProperties;
};
