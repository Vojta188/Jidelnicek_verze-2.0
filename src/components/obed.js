import React from 'react';

class Obed extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            obed:'',
            obed1:'',
            obed2:'',
            obed3:'',
            obed4:''
        }
        this.changeObed = this.changeObed.bind(this);
        this.changeObed1 = this.changeObed1.bind(this);
        this.changeObed2 = this.changeObed2.bind(this);
        this.changeObed3 = this.changeObed3.bind(this);
        this.changeObed4 = this.changeObed4.bind(this);
    }
    changeObed(value){
        this.setState({
          obed:value
        })
      }

      changeObed1(value){
        this.setState({
          obed1:value
        })
      }
      changeObed2(value){
        this.setState({
          obed2:value
        })
      }
      changeObed3(value){
        this.setState({
          obed3:value
        })
      }
      changeObed4(value){
        this.setState({
          obed4:value
        })
      }
      render()
      {
          return(
            <div className = "divobed">
            <label className = "labelobed">Oběd</label><br></br>
            <input onChange = { e => this.changeObed(e.target.value)} type = "text" value = {this.state.obed}/>{' '}
          <input onChange = { e => this.changeObed1(e.target.value)} type = "text" value = {this.state.obed1}/>{' '}
          < input onChange = { e => this.changeObed2(e.target.value)} type = "text" value = {this.state.obed2}/>{' '}
          <input onChange = { e => this.changeObed3(e.target.value)} type = "text" value = {this.state.obed3}/>{' '}
          <input onChange = { e => this.changeObed4(e.target.value)} type = "text" value = {this.state.obed4}/>{' '}
          </div>
          )
      }
      
}
export default Obed;