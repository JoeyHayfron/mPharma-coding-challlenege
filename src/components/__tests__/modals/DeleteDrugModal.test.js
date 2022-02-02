import { render, screen } from "@testing-library/react";
import DeleteDrugModal from "../../modals/DeleteDrugModal";
import Root from "../../../Root";

describe("<DeleteDrugModal />", () => {
  it("renders a modal to delete a drug", () => {
    let state = {
      ui: {
        modalInfo: {
          title: "Delete Drug",
          modalType: "delete-drug-modal",
          id: 3,
          name: "Paracetamol 20MG",
          action: "Delete",
        },
      },
    };
    render(
      <Root state={state}>
        <DeleteDrugModal />
      </Root>
    );

    const title = screen.queryByText("Delete Drug");
    const drugName = screen.queryByTestId("delete-drug-name");
    const buttons = screen.queryAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(drugName).toHaveTextContent("Para");
    expect(buttons.length).toBe(2);
  });
});
