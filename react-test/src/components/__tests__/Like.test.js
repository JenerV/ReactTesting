import { render, screen, fireEvent } from '@testing-library/react';
import Like from '../Like';

describe('Like component', () => {
  test('muestra "Likes: 0" por defecto', () => {
    render(<Like />);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
  });

  test('incrementa likes al hacer clic en Like', () => {
    render(<Like />);
    fireEvent.click(screen.getByText('Like')); // Selección exacta por texto
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();
  });

  test('decrementa likes al hacer clic en Dislike', () => {
    render(<Like />);
    fireEvent.click(screen.getByText('Dislike')); // Selección exacta por texto
    expect(screen.getByText('Likes: -1')).toBeInTheDocument();
  });
});
