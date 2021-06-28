import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText('ACTIVITY EXPENSE TRACKER')).toBeInTheDocument();
  expect(getByText('Hello, ABDOUL')).toBeInTheDocument();
  expect(getByText('The Redeemed - 2020')).toBeInTheDocument();
});
