import { fireEvent, render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import { FavoriteNumber } from "../FavoriteNumber";

describe("FavoriteNumber", () => {
  it("should show the right label", async () => {
   const {getByLabelText, getByRole, debug, rerender, queryByRole  } =  render(<FavoriteNumber />);
    const input = getByLabelText(/Favorite Number/i);
    user.type(input, '10')
   // fireEvent.change(input, {target: {value: '23' }});
   expect(getByRole('alert')).toHaveTextContent('The number is invalid');
   rerender(<FavoriteNumber max={10}/>)
   //use a query function to verify if an element is rendered
   expect(queryByRole('alert')).toBeNull();
  });
});
