import { render, screen } from "@testing-library/react";
import DrugListItem from "../DrugsListItem";

describe("<DrugListItem>", () => {
  it("renders a drug list item with the right props", () => {
    render(<DrugListItem name="Para" price="GHS 20" />);
    const itemName = screen.getByTestId("item-name");
    const itemPrice = screen.getByTestId("item-price");
    expect(itemName).toHaveTextContent("Para");
    expect(itemPrice).toHaveTextContent("GHS 20");
  });
});
