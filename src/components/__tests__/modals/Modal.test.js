import { render, screen } from "@testing-library/react";
import Modal from "../../modals/Modal";
import Root from "../../../Root";

describe("<ModalWrapper />", () => {
  it("renders add/edit modal", () => {
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
        <Modal />
      </Root>
    );
    const addModal = screen.queryByTestId("add-edit-modal");
    expect(addModal).toBeInTheDocument();
  });

  it("renders delete modal", () => {
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
        <Modal />
      </Root>
    );
    const deleteModal = screen.queryByTestId("delete-drug-modal");
    expect(deleteModal).toBeInTheDocument();
  });
});
