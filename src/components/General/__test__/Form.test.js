import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import 'jest-axe/extend-expect';

expect.extend(toHaveNoViolations);

const  Form = () => {
  return (
    <form>
        <label htmlFor='email' >Email</label>
        <input id='email' placeholder="enter email" />
    </form>
  )
}

test('the form is accessible', async () => {
    const { container } = render(<Form />);
    const results = await axe(container);
    expect(results).toHaveNoViolations()

});