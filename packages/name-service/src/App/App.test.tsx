import React from "react";
import { render } from "@testing-library/react";
import App from ".";

test("renders button", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Button/);
  expect(linkElement).toBeInTheDocument();
});
