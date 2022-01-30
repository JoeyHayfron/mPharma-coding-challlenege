import { render, screen } from "@testing-library/react";
import Header from "../Header";
import Root from "../../Root";

describe("<Header />", () => {
  it("renders a logo", () => {
    render(
      <Root>
        <Header />
      </Root>
    );
    const logo = screen.queryByTestId("mpharma-logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders a button with text Add Drug", () => {
    render(
      <Root>
        <Header />
      </Root>
    );
    const addDrugButton = screen.queryByRole("button");

    expect(addDrugButton.textContent).toBe("Add a Drug");
  });
});
