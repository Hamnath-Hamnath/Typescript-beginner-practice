import { Hobbie } from "./PersonName.type";
const Hobbies = (props: HobbiesProps) => {
  return (
    <ul>
      {props.data.map((values) => (
        <li key={values.id}>
          {values.hobby} - {values.id}
        </li>
      ))}
    </ul>
  );
};

type HobbiesProps = {
  data: Hobbie[];
};
export default Hobbies;
