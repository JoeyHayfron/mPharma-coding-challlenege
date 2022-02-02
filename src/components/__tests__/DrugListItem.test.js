import { render, screen } from "@testing-library/react";
import DrugListItem from "../DrugsListItem";
import Root from "../../Root";

describe("<DrugListItem>", () => {
  it("renders a drug list item with the right props", () => {
    render(
      <Root>
        <DrugListItem name="Para" price="GHS 20" />
      </Root>
    );
    const itemName = screen.getByTestId("item-name");
    const itemPrice = screen.getByTestId("item-price");
    expect(itemName).toHaveTextContent("Para");
    expect(itemPrice).toHaveTextContent("GHS 20");
  });
});
