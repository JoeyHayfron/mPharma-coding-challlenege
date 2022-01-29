import { render, screen } from "@testing-library/react";
import AddEditDrugModal from "../../modals/AddEditDrugModal";

describe("<AddEditDrugModal />", () => {
  it("renders a modal to add a new drug", () => {
    render(
      <AddEditDrugModal
        title="Add Drug"
        modalAction={{ text: "Add", task: () => {} }}
      />
    );

    const title = screen.queryByText("Add Drug");
    const buttons = screen.queryAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it("renders a modal to edit a drug", () => {
    render(
      <AddEditDrugModal
        title="Edit Drug"
        drugName="Para"
        drugPrice="GHS 20"
        modalAction={{ text: "Add", task: () => {} }}
      />
    );

    const title = screen.queryByText("Edit Drug");
    const drugName = screen.queryByLabelText("Name");
    const drugPrice = screen.queryByLabelText("Price (GHS)");
    const buttons = screen.queryAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(drugName).toHaveDisplayValue("Para");
    expect(drugPrice).toHaveDisplayValue("GHS 20");
    expect(buttons.length).toBe(2);
  });
});
