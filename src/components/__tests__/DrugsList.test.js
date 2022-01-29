import { render, screen } from "@testing-library/react";
import DrugsList from "../DrugsList";
import { drugs } from "../../shared/stubs";

describe("<DrugsList />", () => {
  it("renders a list of seven drug items", () => {
    render(<DrugsList products={drugs.products} />);
    const drugsList = screen.queryAllByTestId("drugs-list-item");
    expect(drugsList.length).toEqual(7);
  });
});
