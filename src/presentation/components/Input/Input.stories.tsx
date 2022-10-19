import Input, {InputProperties} from "./Input";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {userEvent, within} from "@storybook/testing-library";
import {action} from "@storybook/addon-actions";

export default {
    title: 'App/Components/Input',
    component: Input,
    argTypes: {
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProperties) => (
    <form className="was-validated"><Input {...args}>Prénom</Input></form>);

export const Basic = Template.bind({});

Basic.args = {id: "test"}

export const Required = Template.bind({});

Required.args = {required: true, id: "test", 'data-testid': "test", onChange: action("onChange")}
Required.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const testElement = canvas.getByTestId<HTMLInputElement>("test");

    userEvent.type(testElement, "");

    testElement.reportValidity();
};