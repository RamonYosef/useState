import { useState } from "react";
import { Container } from "./style";

import Button from "@mui/material/Button";

export const Cont: React.FC = () => {
  const [n1, setN1] = useState(0);
 

  const subtrair = () => {
    setN1(n1 - 1);

    if(n1 <= 0)
    {
        setN1(0)
    }
  };

  const adicionar = () => {
    setN1(n1 + 1);
  };

  const num = (e:any) => {
     let n = e.target.value
    setN1(n + n1);
  };

  return (
    <Container>
      <h1>{n1}</h1>
      <ul>
        <li><Button variant="contained" color="success" onClick={adicionar}> + </Button></li>
        <li><Button variant="contained" color="error" onClick={subtrair}> -</Button></li>
      </ul>
      <br />
      <li><Button variant="contained" color="success" onClick={num} value={'1'}> 1 </Button></li>
      <li><Button variant="contained" color="success" onClick={num} value={'2'}> 2 </Button></li>
     
      
    </Container>
  );
};

export default Cont;
