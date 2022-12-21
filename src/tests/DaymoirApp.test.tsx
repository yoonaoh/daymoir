import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Daymoir from '../DaymoirApp';

test('renders learn react link', () => {
  render(<Daymoir />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
