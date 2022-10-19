import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import DemandeRappelView, {DemandeRappelViewProperties} from "../DemandeRappelView";
import DemandeRappelControllerStub from "../stub/DemandeRappelControllerStub";

export default {
    title: 'App/Pages/DemandeRappel',
    component: DemandeRappelView,
    argTypes: {
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof DemandeRappelView>;

const Template: ComponentStory<typeof DemandeRappelView> = (args: DemandeRappelViewProperties) => (
    <DemandeRappelView {...args} />);

export const Basic = Template.bind({});

Basic.args = {controller: new DemandeRappelControllerStub(action("onSubmit"), action('onChange'))}