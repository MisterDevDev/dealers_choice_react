import React, { Component } from 'react';
import axios from 'axios';
import FiscalYear from './components/FiscalYear';


export default class App extends Component {
  constructor(){
    super()
    this.state = { 

     }
  }

  async componentDidMount () {
    const apiData = (await axios.get('/api')).data
    this.setState({
      apiData
    })
  }

  selectYear = async(year) => {
    const EPC_data = (await axios.get('/db')).data
    this.setState({
      selectedYear: year,
      EPC_data
    })
  }

  deselectYear = () => {
    this.setState({
      selectedYear: ''
    })
  }


  render() { 
    return ( 
      <div className='app'>
        <FiscalYear year={2018} deselectYear = {this.deselectYear}
        state={this.state} selectYear={this.selectYear}/>
        <FiscalYear year={2019} deselectYear = {this.deselectYear}
        state={this.state} selectYear={this.selectYear}/>
        <FiscalYear year={2020} deselectYear = {this.deselectYear}
        state={this.state} selectYear={this.selectYear}/>
      </div>
     );
  }
}
 
