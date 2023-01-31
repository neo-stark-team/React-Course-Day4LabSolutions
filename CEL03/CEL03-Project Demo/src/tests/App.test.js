import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/emoji/i);
  expect(linkElement).toBeInTheDocument();
});