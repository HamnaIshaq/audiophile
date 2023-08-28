import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PrimaryHeader from "../PrimaryHeader";

describe("PrimaryHeader component h1", () => {
  it("render correct heading", () => {
    render(<PrimaryHeader text="headphone" />);
    expect(screen.getByRole("heading").textContent).toMatch(/headphone/i);
  });
});
