import { render, screen } from "@testing-library/react";
import Input from "../Input";

describe("<Input />", () => {
  it("renders an input element with name placeholder", () => {
    render(<Input label="name" />);
    const input = screen.queryByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });
});
