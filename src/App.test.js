import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders p tag with text: Welcome to CICD deployed React App on gh-pages", () => {
  render(<App />);
  const pTag = screen.getByText(
    /Welcome to CICD deployed React App on gh-pages/i
  );
  expect(pTag).toBeInTheDocument();
});
