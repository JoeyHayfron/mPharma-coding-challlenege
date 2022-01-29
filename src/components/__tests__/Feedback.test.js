import { render, screen } from "@testing-library/react";
import Feedback from "../Feedback";

describe("<Feedback />", () => {
  it("renders a feedback with the right props", () => {
    render(
      <Feedback
        feedBackType="error"
        title="Error Occurred"
        message="An error occurred"
        action="Retry"
      />
    );

    const action = screen.queryByText("Retry");
    const title = screen.queryByText("Error Occurred");
    const message = screen.queryByText("An error occurred");

    expect(action).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
