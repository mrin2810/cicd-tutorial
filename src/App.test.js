import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders p tag", () => {
  render(<App />);
  const pTag = screen.getByText(
    /I am trying to see how I can use manual trigger to build github pages/i
  );
  expect(pTag).toBeInTheDocument();
});
