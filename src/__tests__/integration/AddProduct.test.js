import App from "../../components/App";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { mockState } from "../../shared/stubs";
import Root from "../../Root";

describe("Process of adding a drug", () => {
  let state;
  beforeEach(() => {
    state = mockState;
  });
  afterEach(() => {
    state = undefined;
  });
  it("displays the add drug modal whe the add drug button is clicked", async () => {
    render(
      <Root>
        <App />
      </Root>
    );

    const addDrugButton = screen.queryByTestId("add-drug-button");
    fireEvent.click(addDrugButton);

    const addDrugModal = await screen.findByTestId("add-edit-modal");
    const addDrugModalTitle = await screen.findByTestId("add-edit-modal-title");
    await waitFor(() => expect(addDrugModal).toBeInTheDocument());
    await waitFor(() =>
      expect(addDrugModalTitle).toHaveTextContent("Add Drug")
    );
  });

  it("adds a new drug with price to the products", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const addDrugButton = screen.queryByTestId("add-drug-button");
    fireEvent.click(addDrugButton);

    // const addDrugModal = await screen.findByTestId("add-edit-modal");
    const addDrugModalNameInput = await screen.findByPlaceholderText("Name");
    const addDrugModalPriceInput = await screen.findByPlaceholderText(
      "Price (GHS)"
    );
    const addDrugModalActionButton = await screen.findByTestId(
      "add-edit-modal-action-button"
    );

    fireEvent.change(addDrugModalNameInput, { target: { value: "Tramadol" } });
    fireEvent.change(addDrugModalPriceInput, {
      target: { value: "20" },
    });
    fireEvent.click(addDrugModalActionButton);

    //Expectations for drugs
    await waitFor(() =>
      expect(state.inventory.entities.products.byId["4"]).toBeDefined()
    );
    await waitFor(() =>
      expect(state.inventory.entities.products.byId["4"].name).toBe("Tramadol")
    );

    //Expectations for prices
    await waitFor(() =>
      expect(state.inventory.entities.prices.byId["7"]).toBeDefined()
    );
    await waitFor(() =>
      expect(state.inventory.entities.prices.byId["7"].price).toBe(20)
    );
  });

  it("hides modal when cancel is clicked", async () => {
    render(
      <Root>
        <App />
      </Root>
    );
    const addDrugButton = screen.queryByTestId("add-drug-button");
    fireEvent.click(addDrugButton);

    const addDrugModal = await screen.findByTestId("add-edit-modal");
    await waitFor(() => expect(addDrugModal).toBeInTheDocument());

    const cancelButton = screen.queryByTestId("add-edit-modal-cancel-button");
    fireEvent.click(cancelButton);

    await waitFor(() => expect(addDrugModal).not.toBeInTheDocument());
  });
});
