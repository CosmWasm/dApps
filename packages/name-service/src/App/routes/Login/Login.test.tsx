import { render } from "@testing-library/react";
import React from "react";
import Login from ".";

test("renders button", () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Button/);
  expect(linkElement).toBeInTheDocument();
});
