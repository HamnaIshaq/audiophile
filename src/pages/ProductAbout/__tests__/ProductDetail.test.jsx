import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductAbout from "../ProductAbout";

describe("ProductAbout component", () => {
  it("renders 2 after increment button is clicked", async () => {
    const user = userEvent.setup();

    render(<ProductAbout />);
    const incrementBtn = screen.getByRole("button", { name: "+" });

    await user.click(incrementBtn);

    expect(
      screen.getByTestId("total amount of items to buy").textContent
    ).toMatch("2");
  });

  it("renders 1 after clicking increment button and then decrement button", async () => {
    const user = userEvent.setup();

    render(<ProductAbout />);
    const incrementBtn = screen.getByRole("button", { name: "+" });
    const decrementBtn = screen.getByRole("button", { name: "-" });

    await user.click(incrementBtn);
    await user.click(decrementBtn);
    expect(
      screen.getByTestId("total amount of items to buy").textContent
    ).toMatch("1");
  });
});
