import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm.js';

test("Renders bookingform heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
