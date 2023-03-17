import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import BackButton from '../index';

describe('BackButton', () => {
  test('should render with default props', () => {
    render(<BackButton text='Go back' />);
    const backButton = screen.getByText('Go back');

    expect(backButton).toBeInTheDocument();
  });

  test('should navigate back on click', () => {
    window.history.back = jest.fn();
    render(<BackButton text='Go back' />);
    const backButton = screen.getByTestId('back-button-div');

    fireEvent.click(backButton);

    expect(window.history.back).toHaveBeenCalled();
  });
});
