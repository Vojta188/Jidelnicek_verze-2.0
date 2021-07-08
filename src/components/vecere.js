import React from 'react';

class Vecere extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            vecere:'',
            vecere1:'',
            vecere2:'',
            vecere3:'',
            vecere4:''
        }
        this.changeVecere = this.changeVecere.bind(this);
        this.changeVecere1 = this.changeVecere1.bind(this);
        this.changeVecere2 = this.changeVecere2.bind(this);
        this.changeVecere3 = this.changeVecere3.bind(this);
        this.changeVecere4 = this.changeVecere4.bind(this);
    }
    changeVecere(value){
        this.setState({
          vecere:value
        })
      }
      changeVecere1(value){
        this.setState({
          vecere1:value
        })
      }
      changeVecere2(value){
        this.setState({
          vecere2:value
        })
      }
      changeVecere3(value){
        this.setState({
          vecere3:value
        })
      }
      changeVecere4(value){
        this.setState({
          vecere4:value
        })
      }

      render()
      {
          return(
            <div className = "divvecere">
            <label className = "labelvecere">Večeře</label><br></br>
            <input onChange = { e => this.changeVecere(e.target.value)} type = "text" value = {this.state.vecere}/>{' '}
          <input onChange = { e => this.changeVecere1(e.target.value)} type = "text" value = {this.state.vecere1}/>{' '}
          <input onChange = { e => this.changeVecere2(e.target.value)} type = "text" value = {this.state.vecere2}/>{' '}
          <input onChange = { e => this.changeVecere3(e.target.value)} type = "text" value = {this.state.vecere3}/>{' '}
          <input onChange = { e => this.changeVecere4(e.target.value)} type = "text" value = {this.state.vecere4}/>{' '}
          </div>
          )
      }
}

export default Vecere;