import { render, screen } from "@testing-library/react";
import DrugsList from "../DrugsList";
import { mockState } from "../../shared/stubs";
import Root from "../../Root";

describe("<DrugsList />", () => {
  it("renders a list of seven drug items", () => {
    render(
      <Root state={mockState}>
        <DrugsList />
      </Root>
    );
    const drugsList = screen.queryAllByTestId("drugs-list-item");
    expect(drugsList.length).toEqual(3);
  });
});
