import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders p tag with text: This is changed again!", () => {
  render(<App />);
  const pTag = screen.getByText(/This is changed again!/i);
  expect(pTag).toBeInTheDocument();
});
