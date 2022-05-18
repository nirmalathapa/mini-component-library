// Button.stories.ts|tsx

import React from "react";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  ArgsTable,
  Stories,
  Heading,
  Title,
  Subtitle,
} from "@storybook/addon-docs/blocks";
import Button from "./Button";
import { Icon } from "../Icons/Icons";

const onClick = action("button-click");

export default {
  title: "Button",
  component: Button,
  parameters: {
    source: true,
    controls: { hideNoControlsWarning: true },
    actions: {
      handles: ["click"],
    },
    docs: {
      page: () => (
        <>
          <Title>Submit Button</Title>
          <Subtitle>
            A button element that is used for intiating the change of the
            context. Icon is used with the button label to give an additional
            clarity that is relevant to the action. The button component is also
            an extension of html button element. which means it can be used as a
            normal html button.
          </Subtitle>
          <Heading>Component API</Heading>
          <ArgsTable />
          <Stories title="Examples" includePrimary />
        </>
      ),
    },
  },

  argTypes: {
    children: {
      description:
        "Specify text label for the button that is of ReactNode type",
      control: false,
    },
    kind: {
      description: "Specify the kind of Button you want to create",
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    size: {
      description: `Specify the kind of Button you want to create`,
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    disabled: {
      description: `Specify the kind of Button you want to create`,
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
    iconLeft: {
      description: `Provide svg icon component to the left of the button`,
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} children={<span>Submit</span>} />
);
export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  iconLeft: <Icon name="FormIcon" size="sm" colorVar="primary" />,
};

Primary.parameters = {
  docs: {
    storyDescription:
      "Primary button gives the user a visual cue that the action they are taking is important and should be taken seriously. Since primary buttons are for important action, it is recommended not to use multiple times in one screen.",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  iconLeft: <Icon name="FormIcon" size="sm" colorVar="secondary" />,
};

Secondary.parameters = {
  docs: {
    storyDescription:
      "Secondary button are used for low emphasis or not mandatory actions. It is pared with primary buttons to provide secondary action.",
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: "tertiary",
  iconLeft: <Icon name="FormIcon" size="sm" colorVar="tertiary" />,
};

Tertiary.parameters = {
  docs: {
    storyDescription:
      "Teritary buttons are used for less prominent and an independant actions that can be used across different places in the web application. ",
  },
};

export const SetOfButtons = () => {
  return (
    <>
      <Button
        kind="secondary"
        iconLeft={<Icon name="FormIcon" size="sm" colorVar="secondary" />}
      >
        Submit
      </Button>
      <span style={{ padding: "0 5px" }} />
      <Button
        kind="primary"
        iconLeft={<Icon name="FormIcon" size="sm" colorVar="primary" />}
        onClick={onClick}
      >
        Submit
      </Button>
    </>
  );
};
SetOfButtons.parameters = {
  docs: {
    storyDescription:
      "You can use two Button elements where the user has more than one option for a given action. Use the secondary button for less important actions, and the primary button for more important actions.",
  },
};

export const DisabledButtons = () => {
  return (
    <>
      <Button
        kind="secondary"
        disabled={true}
        iconLeft={<Icon name="FormIcon" size="sm" colorVar="secondary" />}
      >
        Submit
      </Button>
      <span style={{ padding: "0 5px" }} />
      <Button
        kind="tertiary"
        disabled={true}
        iconLeft={<Icon name="FormIcon" size="sm" colorVar="tertiary" />}
        onClick={onClick}
      >
        Submit
      </Button>
      <span style={{ padding: "0 5px" }} />

      <Button
        kind="primary"
        disabled={true}
        iconLeft={<Icon name="FormIcon" size="sm" colorVar="primary" />}
        onClick={onClick}
      >
        Submit
      </Button>
    </>
  );
};

DisabledButtons.parameters = {
  docs: {
    storyDescription:
      "A disabled button is used when the user is not allowed to perform the action due to the the context of the application. For example, a disabled button is used when the user is not allowed to perform the action because the user is not logged in.",
  },
};

export const ButtonSize = () => {
  return (
    <>
      <Button
        kind="primary"
        iconLeft={<Icon name="FormIcon" size="sm" colorVar="primary" />}
      >
        Submit
      </Button>
      <span style={{ padding: "0 5px" }} />
      <Button
        kind="primary"
        size="md"
        iconLeft={<Icon name="FormIcon" size="md" colorVar="primary" />}
      >
        Submit
      </Button>
      <span style={{ padding: "0 5px" }} />
      <Button
        kind="primary"
        size="lg"
        iconLeft={<Icon name="FormIcon" size="md" colorVar="primary" />}
      >
        Submit
      </Button>
    </>
  );
};

ButtonSize.parameters = {
  docs: {
    storyDescription:
      "This prop specifies which size the Button should be rendered at. Valid values are field, md, lg. If no size is specified, it renders as default.",
  },
};
