import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      size: "sm",
    };
  });

  const renderComponent = () => render(<Button {...props} />);
  it("renders the component with snapshot", () => {
    const { asFragment } = render(<Button {...props}>Submit</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render Submit text correctly", () => {
    renderComponent();
    const component = screen.getByTestId("button");
    expect(component).toHaveTextContent("Submit");
  });

  it("should have small button size as class name", () => {
    props.size = "sm";
    renderComponent();
    const component = screen.getByTestId("button");
    expect(component).toHaveClass("button btn--primary btn--sm");
  });
});
