import React from 'react';

class DruhaVecere extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            druhavecere:'',
            druhavecere1:'',
            druhavecere2:'',
            druhavecere3:'',
            druhavecere4:''
        }
        this.changeDruhavecere = this.changeDruhavecere.bind(this);
        this.changeDruhavecere1 = this.changeDruhavecere1.bind(this);
        this.changeDruhavecere2 = this.changeDruhavecere2.bind(this);
        this.changeDruhavecere3 = this.changeDruhavecere3.bind(this);
        this.changeDruhavecere4 = this.changeDruhavecere4.bind(this);
    }
    changeDruhavecere(value)
  {
    this.setState({
      druhavecere:value
    })
  }
  changeDruhavecere1(value)
  {
    this.setState({
      druhavecere1:value
    })
  }
  changeDruhavecere2(value)
  {
    this.setState({
      druhavecere2:value
    })
  }
  changeDruhavecere3(value)
  {
    this.setState({
      druhavecere3:value
    })
  }
  changeDruhavecere4(value)
  {
    this.setState({
      druhavecere4:value
    })
  }

  render(){
      return(
        <div className = "divdruhavecere">
        <label className = "labeldruhavecere">Druhá Večeře</label><br></br>
        <input onChange = { e => this.changeDruhavecere(e.target.value)} type = "text" value = {this.state.druhavecere}/>{' '}
      <input onChange = { e => this.changeDruhavecere1(e.target.value)} type = "text" value = {this.state.druhavecere1}/>{' '}
      <input onChange = { e => this.changeDruhavecere2(e.target.value)} type = "text" value = {this.state.druhavecere2}/>{' '}
      <input onChange = { e => this.changeDruhavecere3(e.target.value)} type = "text" value = {this.state.druhavecere3}/>{' '}
      <input onChange = { e => this.changeDruhavecere4(e.target.value)} type = "text" value = {this.state.druhavecere4}/>{' '}
      </div>
      )
  }
}
export default DruhaVecere;