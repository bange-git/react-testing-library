import { render, waitFor } from "@testing-library/react";
import "whatwg-fetch"; //polifills the fetch api to get test running in node
import { rest } from "msw";
import { setupServer } from "msw/node";
import GreetingLoader from "../GreetingLoader";
import userEvent from "@testing-library/user-event";

//jest.mock("../../../utils/api");
//we create an interceptor and setup a server. 
const server = setupServer(
  rest.post("/greeting", (req, res, ctx) => {
    return res(ctx.json({ data: { greeting: `Hello ${req.body.subject}` } }));
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it("loads greetings on clik", async () => {
  const { getByLabelText, getByText, debug } = render(<GreetingLoader />);
  const nameInput = getByLabelText(/name/i);
  const loadButton = getByText(/load/i);
  //nameInput.value = "Mary";
  userEvent.type(nameInput, "Mary");
  userEvent.click(loadButton);
  debug();
  //to avoid warnings and prevent some errors, we need to wait for the response.
  await waitFor(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent(`Hello Mary`)
  );
  debug();
});
