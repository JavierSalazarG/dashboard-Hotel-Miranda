import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpanStatusStyled } from "../../components/tables/TableStyled";
describe("Button", () => {
  test("Si el botón está en Check In, el fondo es verde y el color del texto es correcto", () => {
    render(<SpanStatusStyled $color="#5AD07A">Check In</SpanStatusStyled>);
    const button = screen.getByText("Check In");

    expect(button).toHaveStyle(`color: #5AD07A;`);
  });
  test("Si el botón está en Check Out, el fondo es rojo y el color del texto es correcto", () => {
    render(<SpanStatusStyled $color="#FF0000">Check Out</SpanStatusStyled>);
    const button = screen.getByText("Check Out");

    expect(button).toHaveStyle(`color: #FF0000;`);
  });
  test("Si el botón está en In Progress, el fondo es Amarillo y el color del texto es correcto", () => {
    render(<SpanStatusStyled $color="#E8F02E">In Progress</SpanStatusStyled>);
    const button = screen.getByText("In Progress");

    expect(button).toHaveStyle(`color: #E8F02E;`);
  });
});
