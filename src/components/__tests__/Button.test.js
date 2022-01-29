import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("<Button>", () => {
  it("renders button with right children props", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Test Button");
  });

  it("renders primary button correctly", () => {
    render(<Button buttonType="primary">Test Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("background-color: #ff5000");
  });
});
