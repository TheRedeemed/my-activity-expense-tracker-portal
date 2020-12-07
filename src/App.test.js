import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText('MY ACTIVITY EXPENSE TRACKER PORTAL')).toBeInTheDocument();
  expect(getByText('Activities & Expenses')).toBeInTheDocument();
  expect(getByText('The Redeemed - 2020')).toBeInTheDocument();
});
