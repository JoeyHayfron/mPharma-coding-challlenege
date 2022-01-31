import { render, screen } from "@testing-library/react";
import ModalWrapper from "../../modals/Modal";

describe("<ModalWrapper />", () => {
  it("renders a modal wrapper with a backdrop", () => {
    render(<ModalWrapper />);
    const backdrop = screen.queryByTestId("modal-backdrop");
    expect(backdrop).toBeInTheDocument();
  });
});
