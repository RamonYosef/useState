import { useState } from "react";
import { Container } from "./style";

interface Item {
  name: string | undefined;
}

export const Cont: React.FC = () => {
  const [myArray, setMyArray] = useState<Item[]>([]);
  const [data, setData] = useState<string>();

  const add = (e: any) => {
    e.preventDefault();

    setMyArray([
      ...myArray,
      {
        name: data
      },
    ]);

    setData('');
    e.target.reset();
  };

  console.log(data);

  if (myArray?.length >= 5) {
    <>vc passou do limite, meu chapa</>;
  }

  return (
    <Container>
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="digite seu nome"
          name="nome"
          defaultValue={data}
          onChange={(ev) => {
            setData(ev.target.value);
          }}
        />
        <button type="submit">adicionar</button>
      </form>

      <div>
        {myArray?.map((item, index) => (
          <div key={"listItems" + index}>{item.name}</div>
        ))}
      </div>
    </Container>
  );
};

export default Cont;
