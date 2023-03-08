import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const AddTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /ADD/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};
describe("TODO", () => {
  it("should check if the element exist in the list", async () => {
    render(<MockTodo />);
    AddTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should have correct number of items in the list", async () => {
    render(<MockTodo />);
    AddTask(["Go grocery shopping", "pet my cat", "wash my hands"]);
    const divElements = screen.getAllByTestId("todoId");
    expect(divElements.length).toBe(3);
  });

  it("should not have the class completed on initial render", async () => {
    render(<MockTodo />);
    AddTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have completed class when clicked on list", async () => {
    render(<MockTodo />);
    AddTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
