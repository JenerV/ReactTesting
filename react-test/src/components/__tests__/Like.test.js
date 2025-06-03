import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../Like"; 

describe("Like component", () => {
  test('muestra por defecto el valor "Likes: 0"', () => {
    render(<Like />);
    expect(screen.getByText(/Likes: 0/i)).toBeInTheDocument();
  });

  test("incrementa el número de likes al hacer clic en el botón Like", () => {
    render(<Like />);
    const likeButton = screen.getByRole("button", { name: /Like/i });
    fireEvent.click(likeButton);
    expect(screen.getByText(/Likes: 1/i)).toBeInTheDocument();
  });

  test("decrementa el número de likes al hacer clic en el botón Dislike", () => {
    render(<Like />);
    const dislikeButton = screen.getByRole("button", { name: /Dislike/i });
    fireEvent.click(dislikeButton);
    expect(screen.getByText(/Likes: -1/i)).toBeInTheDocument();
  });
});
