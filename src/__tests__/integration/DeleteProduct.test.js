import App from "../../components/App";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react";
import { mockState } from "../../shared/stubs";
import Root from "../../Root";

describe("Process for deleting a product but keeping its prices", () => {
  let state;

  beforeEach(() => {
    state = mockState;
  });

  afterEach(() => {
    state = undefined;
  });

  it("shows the delete modal when delete icon is clicked", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const drugsList = await screen.findAllByTestId("drugs-list-item");
    const deleteFirstDrugIcon = await within(drugsList[0]).findByTestId(
      "delete-drug-icon"
    );

    fireEvent.click(deleteFirstDrugIcon);

    const deleteDrugModal = await screen.findByTestId("delete-drug-modal");
    const deleteDrugModalTitle = await screen.findByTestId(
      "delete-drug-modal-title"
    );
    await waitFor(() => expect(deleteDrugModal).toBeInTheDocument());
    await waitFor(() =>
      expect(deleteDrugModalTitle).toHaveTextContent("Delete Drug")
    );
  });

  it("it deletes a drug ad keeps prices when delete button is pressed", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const drugsList = await screen.findAllByTestId("drugs-list-item");
    const deleteFirstDrugIcon = await within(drugsList[0]).findByTestId(
      "delete-drug-icon"
    );

    fireEvent.click(deleteFirstDrugIcon);

    const deleteButton = await screen.findByTestId("delete-drug-button");
    fireEvent.click(deleteButton);

    await waitFor(() =>
      expect(state.inventory.entities.products.byId["3"]).toBeUndefined()
    );
    await waitFor(() =>
      expect(state.inventory.entities.prices.byId["5"]).toBeDefined()
    );
    await waitFor(() =>
      expect(state.inventory.entities.prices.byId["6"]).toBeDefined()
    );
  });
});
