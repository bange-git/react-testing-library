import { render, fireEvent, wait, waitFor } from "@testing-library/react";

import { loadGreeting as mockLoadGreeting } from "../../../utils/api";
import GreetingLoader from "../GreetingLoader";

jest.mock("../../../utils/api");

it("loads greetings on clik", async () => {
  const testGreeting = "TEST_GREETING";
  mockLoadGreeting.mockResolvedValueOnce({
    data: { greeting: testGreeting },
  });
  const { getByLabelText, getByText } = render(<GreetingLoader />);
  const nameInput = getByLabelText(/name/i);
  const loadButton = getByText(/load/i);
  nameInput.value = "Mary";
  fireEvent.click(loadButton);
  expect(mockLoadGreeting).toHaveBeenCalledWith("Mary");
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
  //to avoid warnings and prevent some errors, we need to wait for the response.
  await waitFor(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent(testGreeting)
  );
});
