import { NegociacaoController } from "../controllers/negociacao-controller";
const { render, screen } = require("@testing-library/react");

describe("testar seletor ", ()=>{
  test("",()=>{
    const data = [
     {
      data: 3/12/1998,
      quantidade: 100,
      valor: 10
    },
  ];
  const nomeUsuario = screen.getByText(data);
  expect(data).toBe(3/12/1998);
  })
})