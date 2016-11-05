import React from 'react';
import { action } from 'mobx';
import Search from '../../components/Search.jsx';

//import { observer } from 'mobx-react'

//@observer(["state"]) // Only required if you use or change the state outside fetchData
export default class Home extends React.Component {
    @action static fetchData({state}){
        state.app.title = 'Home'
    };

    searchPatents = () => {
        console.log('this was called');
    }

    render() {
        return <section>
            <h1>Home</h1>
            <p>Welcome to the fastest patent search in the universe !</p>
            <Search searchPatents={this.searchPatents} />
        </section>
    }
}