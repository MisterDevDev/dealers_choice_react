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
    const EPC_data = (await axios.get('/db')).data
    this.setState({
      apiData,
      EPC_data
    })
  }

  selectYear = (year) => {
    this.setState({
      selectedYear: year
    })
  }

  render() { 
    console.log(this)
    return ( 
      <div>
        <FiscalYear year={2018} 
        state={this.state} selectYear={this.selectYear}/>
        <FiscalYear year={2019} 
        state={this.state} selectYear={this.selectYear}/>
        <FiscalYear year={2020} 
        state={this.state} selectYear={this.selectYear}/>
      </div>
     );
  }
}
 
