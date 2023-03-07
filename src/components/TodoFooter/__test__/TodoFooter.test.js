import { screen, render } from "@testing-library/react";
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom'

const MockComponent = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

it('should render the correct number of incomplete tasks', async () => {
    render(<MockComponent numberOfIncompleteTasks={7} />);
    const paragraphElement = screen.getByText(/7 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
})

it('should singular task when only 1 task is incomplete', async () => {
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
})

it('should be visible to the user', async () => {
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
})
it('should be truthy', async () => {
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
})
it('should contain p', async () => {
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML("p");
})

it('should have text contain', async () => {
    render(<MockComponent numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toHaveTextContent('1 task left');
})