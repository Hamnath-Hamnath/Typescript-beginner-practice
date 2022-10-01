import "./styles.css";
import Greet from "./components/Greet";
import PersonName from "./components/PersonName";
import Hobbies from "./components/Hobbies";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const Person = {
    id: 1998,
    hobby: "hamnath"
  };

  const HobbiesList = [
    {
      id: 1,
      hobby: "Nothing"
    },
    {
      id: 2,
      hobby: "Nothing"
    },
    {
      id: 3,
      hobby: "Nothing"
    },
    {
      id: 4,
      hobby: "Nothing"
    }
  ];
  return (
    <div className="App">
      <Greet name={"Typescript"} isAdmin={true} />
      <PersonName name={Person} />
      <Hobbies data={HobbiesList} />
      <Status data={"error"} />
      <Heading>
        <ul>
          <li>Heading</li>
          <li>10</li>
        </ul>
        <Status data={"success"} />
      </Heading>
      <Button
        handleClick={(event, id) => {
          console.log(event, id);
        }}
      />
      <br />
      <br />
      <Input
        value={input}
        handleChange={(event) => {
          setInput(event);
        }}
      >
        <p>{input}</p>
      </Input>
    </div>
  );
}
