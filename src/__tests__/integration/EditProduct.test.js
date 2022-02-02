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

describe("Process for editing a drug name and/or setting a new price", () => {
  let state;

  beforeEach(() => {
    state = mockState;
  });

  afterEach(() => {
    state = undefined;
  });

  it("displays the edit drug modal whe the edit drug icon is clicked", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const drugsList = await screen.findAllByTestId("drugs-list-item");
    const editFirstDrugIcon = await within(drugsList[0]).findByTestId(
      "edit-drug-icon"
    );

    fireEvent.click(editFirstDrugIcon);

    const editDrugModal = await screen.findByTestId("add-edit-modal");
    const editDrugModalTitle = await screen.findByTestId(
      "add-edit-modal-title"
    );
    await waitFor(() => expect(editDrugModal).toBeInTheDocument());
    await waitFor(() =>
      expect(editDrugModalTitle).toHaveTextContent("Edit Drug")
    );
  });

  it("changes the name and adds a new price to a product", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const drugsList = await screen.findAllByTestId("drugs-list-item");
    const editFirstDrugIcon = await within(drugsList[0]).findByTestId(
      "edit-drug-icon"
    );

    fireEvent.click(editFirstDrugIcon);

    const editDrugModalNameInput = await screen.findByPlaceholderText("Name");
    const editDrugModalPriceInput = await screen.findByPlaceholderText(
      "Price (GHS)"
    );
    const editDrugModalActionButton = await screen.findByTestId(
      "add-edit-modal-action-button"
    );

    fireEvent.change(editDrugModalNameInput, {
      target: { value: "Tramadol" },
    });
    fireEvent.change(editDrugModalPriceInput, {
      target: { value: "20" },
    });
    fireEvent.click(editDrugModalActionButton);

    await waitFor(() =>
      expect(state.inventory.entities.products.byId["3"]).toBeDefined()
    );
    await waitFor(() =>
      expect(state.inventory.entities.products.byId["3"].name).toBe("Tramadol")
    );
    await waitFor(() =>
      expect(state.inventory.entities.products.byId["3"].prices.length).toBe(3)
    );
  });

  it("accepts only numbers for price", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const drugsList = await screen.findAllByTestId("drugs-list-item");
    const editFirstDrugIcon = await within(drugsList[0]).findByTestId(
      "edit-drug-icon"
    );

    fireEvent.click(editFirstDrugIcon);

    const editDrugModalNameInput = await screen.findByPlaceholderText("Name");
    const editDrugModalPriceInput = await screen.findByPlaceholderText(
      "Price (GHS)"
    );
    const editDrugModalActionButton = await screen.findByTestId(
      "add-edit-modal-action-button"
    );

    fireEvent.change(editDrugModalNameInput, {
      target: { value: "Tramadol" },
    });
    fireEvent.change(editDrugModalPriceInput, {
      target: { value: "string" },
    });
    fireEvent.click(editDrugModalActionButton);

    const feedBack = await screen.findByTestId("feedback");

    await waitFor(() => expect(feedBack).toBeInTheDocument());
    await waitFor(() =>
      expect(feedBack).toHaveTextContent("Price must be a number")
    );
  });

  it("does not accept empty fields", async () => {
    render(
      <Root state={state}>
        <App />
      </Root>
    );

    const drugsList = await screen.findAllByTestId("drugs-list-item");
    const editFirstDrugIcon = await within(drugsList[0]).findByTestId(
      "edit-drug-icon"
    );

    fireEvent.click(editFirstDrugIcon);

    const editDrugModalNameInput = await screen.findByPlaceholderText("Name");
    const editDrugModalPriceInput = await screen.findByPlaceholderText(
      "Price (GHS)"
    );
    const editDrugModalActionButton = await screen.findByTestId(
      "add-edit-modal-action-button"
    );

    fireEvent.change(editDrugModalNameInput, {
      target: { value: "" },
    });
    fireEvent.change(editDrugModalPriceInput, {
      target: { value: "" },
    });
    fireEvent.click(editDrugModalActionButton);

    const feedBack = await screen.findByTestId("feedback");

    await waitFor(() => expect(feedBack).toBeInTheDocument());
    await waitFor(() =>
      expect(feedBack).toHaveTextContent("Please fill all fields")
    );
  });
});
