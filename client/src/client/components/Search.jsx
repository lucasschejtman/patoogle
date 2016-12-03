import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Search extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange(event) {
        this.props.searchPatents(event.target.name, event.target.value);
    }

    render() {
        const style = {
            margin: 12,
        };

        return (
            <div>
                <TextField name="value" hintText="Find Patents" value={this.props.value} onChange={this.handleTextFieldChange} />
                <RaisedButton label="Search" primary={true} style={style} onMouseDown={this.props.searchPatents()} />
            </div>
        )
    }
}

