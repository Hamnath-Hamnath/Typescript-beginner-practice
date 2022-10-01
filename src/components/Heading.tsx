import React from "react";

const Heading = (props: HeadingProps) => {
  return props.children;
};

export default Heading;

type HeadingProps = {
  children: React.ReactNode;
};
