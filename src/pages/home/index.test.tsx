import { render } from "@testing-library/react";
  import userEvent  from '@testing-library/user-event'
import { test, describe, vi } from "vitest";

import Home from ".";

describe("Home component", () => {
  test("Check React & Vite logo", () => {
    const wrapper = render(<Home />);

    expect(wrapper.getByAltText(/react logo/i));
    expect(wrapper.getByAltText(/vite logo/i));
  });

  test('Example counter test', async () => { 
    const wrapper = render(<Home />)
    const user = userEvent.setup()
    const spyAnchorTag = vi.spyOn(user, 'click') 
    const button = wrapper.getByText(/count is/gi)

    expect(button.textContent).toBe('count is 0')
    await user.click(button)
    expect(spyAnchorTag).toHaveBeenCalled()
    expect(button.textContent).toBe('count is 1')
   })
});
