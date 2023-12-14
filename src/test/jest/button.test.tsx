import React from "react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpanStatusStyled } from "../../components/tables/TableStyled";

describe("SpanStatusStyled", () => {
  test("Si el botón está en Check In, el fondo es verde y el color del texto es correcto", () => {
    render(<SpanStatusStyled $color="#5AD07A">Check In</SpanStatusStyled>);
    const span = screen.getByText("Check In");

    expect(span).toHaveStyle({ color: "#5AD07A" });
  });

  test("Si el botón está en Check Out, el fondo es rojo y el color del texto es correcto", () => {
    render(<SpanStatusStyled $color="#FF0000">Check Out</SpanStatusStyled>);
    const span = screen.getByText("Check Out");

    expect(span).toHaveStyle({ color: "#FF0000" });
  });

  test("Si el botón está en In Progress, el fondo es Amarillo y el color del texto es correcto", () => {
    render(<SpanStatusStyled $color="#E8F02E">In Progress</SpanStatusStyled>);
    const span = screen.getByText("In Progress");

    expect(span).toHaveStyle({ color: "#E8F02E" });
  });
});
