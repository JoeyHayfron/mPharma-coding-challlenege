import { render, screen } from "@testing-library/react";
import DeleteDrugModal from "../../modals/DeleteDrugModal";

describe("<DeleteDrugModal />", () => {
  it("renders a modal to delete a drug", () => {
    render(
      <DeleteDrugModal
        title="Delete Drug"
        modalAction={{ text: "Delete", task: () => {} }}
        drugName="Para"
      />
    );

    const title = screen.queryByText("Delete Drug");
    const drugName = screen.queryByTestId("delete-drug-name");
    const buttons = screen.queryAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(drugName).toHaveTextContent("Para");
    expect(buttons.length).toBe(2);
  });
});
