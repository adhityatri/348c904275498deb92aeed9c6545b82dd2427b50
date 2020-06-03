import React, {Component} from 'react'
import Navbar from 'components/layouts/navbar'
import Content from 'components/layouts/content'
import {ThemeProvider} from "styled-components"
import Drawer from 'components/drawer'
import theme from 'themes.js'
import 'assets/style/App.scss'
import Calendar from 'components/calendar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLocation : false
    };
    this.handleLocation = this.handleLocation.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleLocation(){
    this.setState({
      isLocation : true
    })
  }

  handleClose(){
    this.setState({
      isLocation : false
    })
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Drawer onClose={this.handleClose} visibility={this.state.isLocation}></Drawer>
        <Navbar handler={this.handleLocation}></Navbar>
        <Calendar></Calendar>
        <Content></Content>
      </ThemeProvider>
    );
  }
}

export default App;
