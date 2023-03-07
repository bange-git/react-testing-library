import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same title passed into title prop", async () => {
    render(<Header title="my title" />);
    const headingElement = screen.getByText(/my title/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same title passed into title props", async () => {
    render(<Header title="my title" />);
    const headingElement = screen.getByRole("heading", { name: "my title" });
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same title passed into title", async () => {
    render(<Header title="my title" />);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same title by id", async () => {
    render(<Header title="my title" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same title passed using findBy", async () => {
    render(<Header title="my title" />);
    const headingElement = await screen.findByText(/my title/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render same title passed using queryBy", async () => {
    render(<Header title="my title" />);
    const headingElement = screen.queryByText(/Dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  it("should render same title passed using getAllByRole", async () => {
    render(<Header title="my title" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });
});
