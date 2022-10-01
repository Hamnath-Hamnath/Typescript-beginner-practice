type GreetProps = {
  name: string;
  messageCount?: number;
  isAdmin: boolean;
};

const Greet = ({ messageCount = 0, name, isAdmin }: GreetProps) => {
  return (
    <>
      {isAdmin ? (
        <>
          <h2>Welcome {name}</h2>
          <h2>Hey, you have {messageCount} unread messages!! </h2>
        </>
      ) : (
        <>
          <h1>Welcome Guest</h1>
        </>
      )}
    </>
  );
};

export default Greet;
