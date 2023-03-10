import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../../FollowersList/FollowersList";

const MockFollersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("Follower List", () => {
  it("should render the first item", async () => {
    render(<MockFollersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render all users", async () => {
    render(<MockFollersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    //screen.debug(followerDivElements);
    expect(followerDivElements.length).toBe(1);
  });
});
