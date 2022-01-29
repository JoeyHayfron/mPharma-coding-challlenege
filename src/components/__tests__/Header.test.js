import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("<Header />", () => {
  it("renders a logo", () => {
    render(<Header />);
    const logo = screen.queryByTestId("mpharma-logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders a button with text Add Drug", () => {
    render(<Header />);
    const addDrugButton = screen.queryByRole("button");

    expect(addDrugButton.textContent).toBe("Add a Drug");
  });
});
