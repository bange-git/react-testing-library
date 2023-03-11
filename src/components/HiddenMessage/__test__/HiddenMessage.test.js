import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HiddenMessage from "../HiddenMessage";

/** To make our test run faster without waiting, we can mock the C
 CSSTransition and ignore the async await
 */

 jest.mock('react-transition-group', () => {
    return {
        CSSTransition: props => (props.in ? props.children : null)
    }
 })

describe("<HiddenMessage />", () => {
 // it("shows hidden message when toggle is clicked", async () => {
  it("shows hidden message when toggle is clicked",  () => {
    const myMessage = "hello world";
    render(<HiddenMessage>{myMessage}</HiddenMessage>);
    //const toggleButton = screen.getByRole('button', {name: /toggle/i});
    const toggleButton = screen.getByText(/toggle/i);
    const childElement = screen.queryByText(myMessage);
    expect(childElement).not.toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByText(myMessage)).toBeInTheDocument();
    fireEvent.click(toggleButton);
   // await waitFor(() => expect(childElement).not.toBeInTheDocument());
   expect(childElement).not.toBeInTheDocument()
  });
});
