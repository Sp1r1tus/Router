import * as React from 'react';
import MaskedTextFieldWrapper from './Components/MaskedTextFieldWrapper'
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';

class Router2 extends React.Component<{}, {}> {

    public componentDidMount = async () => {

        const sec = this.setsec()
        console.log(sec)
    }

    public setsec = () => {
        const exp = true;

        /*   const secexp = user.userRoles.find((element) => {
               return element.RoleName === 'RolenName';
           });
   
           if (!isUndefined(secexp)) {
               exp = true;
           } */

        return exp;
    }




    public render() {
        return (
            <div>
                <DatePicker
                    isRequired={false}
                    allowTextInput={false}
                    firstDayOfWeek={DayOfWeek.Monday}
                    formatDate={this.onFormatDate}
                    showMonthPickerAsOverlay={false}
                    onSelectDate={this.onSelctedDate}
                />
                <MaskedTextFieldWrapper
                    onChange={this.onChangedCosts}
                    maskChar=""
                    mask="999999999999999"
                    suffix="€"
                />
            </div>
        )
    }

    private onChangedCosts = (event: any, value: string): void => {
        console.log(value)
    }

    private onSelctedDate = (date: Date) => {
        this.setState({ Date_select: ((date.getFullYear().toString()) + ("0" + (date.getMonth() + 1)).slice(-2)) })
    }

    private onFormatDate = (date: Date): string => {
        return (date.getMonth() + 1) + '/' + (date.getFullYear());
    };

}

export default Router2;