import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Search extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { textFieldValue: '' };
    }

    searchOnMouseDown() {
        console.log(this.state);
    }

    _handleTextFieldChange(e) {
        console.log(e.target.value)
        this.setState({
            textFieldValue: e.target.value
        });
    }

    render() {
        const style = {
            margin: 12,
        };

        return <div>
            <TextField hintText="Find Patents" onChange={this._handleTextFieldChange} />
            <RaisedButton label="Search" primary={true} style={style} onMouseDown={this.searchOnMouseDown} />
        </div>
    }
}