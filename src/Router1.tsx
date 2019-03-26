import * as React from 'react';
import { CompoundButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { getlastthreePeriods } from './Webservice/index';
import { Dialog, DialogFooter, DialogType, ComboBox } from 'office-ui-fabric-react';
import { IComboBoxOption } from 'office-ui-fabric-react'

interface IRouterState {
    showRouter: boolean;
    hideDialog: boolean;
    period_option: IComboBoxOption[];
}

class Router1 extends React.Component<{}, IRouterState> {

    public state: IRouterState = {
        showRouter: false,
        hideDialog: true,
        period_option: [],
    };


    public componentDidMount = async () => {
      
        const periods = await getlastthreePeriods()
        this.setState({ period_option: periods, showRouter: true })
    }

    public render() {
        return (
            <div>
                <Dialog
                    hidden={this.state.hideDialog}
                    onDismiss={this.closeDialog}
                    dialogContentProps={{
                        type: DialogType.normal,
                        title: 'Title Text',
                        subText: 'Choose an period'
                    }}
                    modalProps={{
                        isBlocking: false,
                        containerClassName: 'ms-dialogMainOverride'
                    }}
                >
                    <ComboBox
                        autoComplete="on"
                        options={this.state.period_option}
                    />

                    <DialogFooter>
                        <PrimaryButton iconProps={{ iconName: 'Play' }} text="Start"
                            styles={{
                                root: {
                                    backgroundColor: '#bad80a'
                                },
                                rootHovered: {
                                    backgroundColor: '#abc709'
                                },
                                rootPressed: {
                                    backgroundColor: '#9cb509'
                                }

                            }} />
                        <PrimaryButton iconProps={{ iconName: 'Cancel' }} onClick={this.closeDialog} text="Cancel"
                            styles={{
                                root: {
                                    backgroundColor: '#e81123'
                                },
                                rootHovered: {
                                    backgroundColor: '#d61121'
                                },
                                rootPressed: {
                                    backgroundColor: '#c4101f'
                                }

                            }} />
                    </DialogFooter>
                </Dialog>


                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-lg12">
                                < div className="titelMenu"> Dialog </div>
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                                <CompoundButton
                                    iconProps={{ iconName: 'Play' }}
                                    primary={false}
                                    secondaryText="Press here to open the dialog"
                                    styles={{
                                        root: {
                                            backgroundColor: '#bad80a'
                                        },
                                        rootHovered: {
                                            backgroundColor: '#abc709'
                                        },
                                        rootPressed: {
                                            backgroundColor: '#9cb509'
                                        }
                                    }}
                                    onClick={this.openDialog}>
                                    Open Dialog
                            </CompoundButton>
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-lg12">
                            {(this.state.showRouter) &&
                                <div className="titelMenu"> Router 2 </div>
                            }
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                            {this.state.showRouter &&
                                <CompoundButton
                                    iconProps={{ iconName: 'PaymentCard' }}
                                    primary={false}
                                secondaryText="Press here to open the Router2"
                                    href="./Router2">
                                    Router 2 Text
                            </CompoundButton>}
                        </div>
                    </div>

                </div>
            </div >
        )
    }



    private openDialog = async () => {
        this.setState({ hideDialog: false })
    }

    private closeDialog = async () => {
        this.setState({ hideDialog: true });
    };

 
}
export default Router1;