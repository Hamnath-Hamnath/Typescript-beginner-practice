import { PersonNameProps } from "./PersonName.type";
const PersonName = (props: PersonNameProps) => {
  return (
    <>
      {props.name.id} {props.name.hobby}
    </>
  );
};

export default PersonName;
