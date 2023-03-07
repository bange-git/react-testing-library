import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

describe("ADD INPUT", () => {
  it("should contain placeholder text", async () => {
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should change input when type event triggered", async () => {
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go grossery shopping" },
    });
    expect(inputElement.value).toBe("Go grossery shopping");
  });

  it("should have empty input field when button is clicked", async () => {
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /ADD/i });
    fireEvent.change(inputElement, {
      target: { value: "Go grossery shopping" },
    });
    buttonElement.click();
    expect(inputElement.value).toBe("");
  });
});
