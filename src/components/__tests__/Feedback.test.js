import { render, screen } from "@testing-library/react";
import Feedback from "../Feedback";
import Root from "../../Root";

describe("<Feedback />", () => {
  it("renders a feedback with the right props", () => {
    let state = {
      ui: {
        showFeedback: true,
        feedbackInfo: {
          feedbackType: "error",
          title: "Error Occurred",
          message: "An error occurred",
          autoDismiss: false,
          action: {
            text: "Retry",
            task: () => {},
          },
        },
      },
    };
    render(
      <Root state={state}>
        <Feedback />
      </Root>
    );

    const action = screen.queryByText("Retry");
    const title = screen.queryByText("Error Occurred");
    const message = screen.queryByText("An error occurred");

    expect(action).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
