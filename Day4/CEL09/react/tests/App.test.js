import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByRole('textbox');
  expect(linkElement).toBeInTheDocument();
});

