import { useEffect, useState } from "react";

const Status = (props: StatusProps) => {
  let { data } = props;
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (data === "loading") {
      setMessage("loading.....");
    } else if (data === "success") {
      setMessage("Data fetched successfully");
    } else if (data === "error") {
      setMessage("OOPS!!! there is some error occured");
    }
  }, [props]);

  return <h2>{message}</h2>;
};

export default Status;

type StatusProps = {
  // data: string;
  data: "loading" | "success" | "error"; //this concept is called union type defining
};
