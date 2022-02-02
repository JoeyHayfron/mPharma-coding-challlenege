import { render, screen } from "@testing-library/react";
import AddEditDrugModal from "../../modals/AddEditDrugModal";
import Root from "../../../Root";

describe("<AddEditDrugModal />", () => {
  it("renders a modal to add a new drug", () => {
    let state = {
      ui: {
        modalInfo: {
          modalType: "add-drug-modal",
          title: "Add Drug",
          action: "Add",
        },
      },
    };
    render(
      <Root state={state}>
        <AddEditDrugModal />
      </Root>
    );

    const title = screen.queryByText("Add Drug");
    const buttons = screen.queryAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it("renders a modal to edit a drug", () => {
    let state = {
      ui: {
        modalInfo: {
          modalType: "edit-drug-modal",
          title: "Edit Drug",
          action: "Save",
          name: "Para",
          price: 20,
        },
      },
    };
    render(
      <Root state={state}>
        <AddEditDrugModal />
      </Root>
    );

    const title = screen.queryByText("Edit Drug");
    const drugName = screen.queryByLabelText("Name");
    const drugPrice = screen.queryByLabelText("Price (GHS)");
    const buttons = screen.queryAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(drugName).toHaveDisplayValue("Para");
    expect(drugPrice).toHaveDisplayValue("20");
    expect(buttons.length).toBe(2);
  });
});
