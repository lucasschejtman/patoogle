import React from 'react';
import { action } from 'mobx';
import Search from '../../components/Search.jsx';

import { observer } from 'mobx-react';

@observer(["state"]) // For instance "actions" doesn't need to be injected if you only use it in fetchData
export default class Home extends React.Component {
    @action static fetchData({state, actions}){
        state.app.title = 'Home';
    };

    constructor(props, context) {
        super(props, context);
        this.updateProperty = this.updateProperty.bind(this)
    }

    updateProperty (key, value) {
        this.props.state.search[key] = value;
    }



    render() {
        return <section>
            <h1>Home</h1>
            <p>Welcome to the fastest patent search in the universe !</p>
            <Search searchPatents={this.updateProperty} value={this.props.state.search.value} />
        </section>
    }
}