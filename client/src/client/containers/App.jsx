import React from 'react'
import Menu from '../components/Menu.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var menuData = [
  {title: "Home", path:""},
  {title: "Browse", path:"Browse?wait=1000"},
  {title: "About", path:"about"},
  {title: "Not Found", path:"this_url_doesnt_exist"},
]

export default class App extends React.Component {
    render(){
        return <div>
            <Menu prefix='/' data={menuData} />
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        </div>
    }
}
