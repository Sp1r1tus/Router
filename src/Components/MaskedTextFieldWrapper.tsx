import { MaskedTextField } from "office-ui-fabric-react";
import * as React from "react";

interface IMyCompomentProps {
    data?: string;
    resetValue: boolean;
}


class MaskedTextFieldWrapper extends React.Component<any, any> {
    private textFieldRef: React.RefObject<MaskedTextField>;

    constructor(props: IMyCompomentProps) {
        super(props);
    }


    public generateKey(prefix: string): string {
        return `${prefix}_${new Date().getTime()}`;
    }

    public render(): JSX.Element {
        if (this.props.resetValue) {
            return <MaskedTextField key={this.generateKey("textfield")} value='' ref={this.textFieldRef} {...this.props} />;
        }

        return <MaskedTextField ref={this.textFieldRef} {...this.props} />;
    }
}
export default MaskedTextFieldWrapper;