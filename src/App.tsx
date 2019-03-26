import { IconButton } from 'office-ui-fabric-react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Router1 from './Router1';
import Router2 from './Router2';

initializeIcons();
class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-lg12">
                            <IconButton
                                onClick={this.goBack}
                                iconProps={{ iconName: 'ChromeBack' }}
                                title="Back"
                                ariaLabel="Back" />
                        </div>
                    </div>
                </div>

                <div className="Content">
                    <BrowserRouter>
                        <div>
                            <Route exact={true} path="/" component={Router1} />
                            <Route path="/Router2" component={Router2} />
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
    public goBack() {
        window.history.back();
    }
}

export default App;