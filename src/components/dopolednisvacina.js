import React from "react";
import { PoleJidelnicek } from "./PoleProUlozeni";

class DopoledniSvacina extends React.Component{
    constructor(props)
    {
        super(props)
        this.state ={
        dopolednisvacina:'',
        dopolednisvacina1:'',
        dopolednisvacina2:'',
        dopolednisvacina3:'',
        dopolednisvacina4:''
        }
        this.changeDopolednisvacina = this.changeDopolednisvacina.bind(this);
    this.changeDopolednisvacina1 = this.changeDopolednisvacina1.bind(this);
    this.changeDopolednisvacina2= this.changeDopolednisvacina2.bind(this);
    this.changeDopolednisvacina3 = this.changeDopolednisvacina3.bind(this);
    this.changeDopolednisvacina4 = this.changeDopolednisvacina4.bind(this);
    }

    SaveFormDopSvacina(){
      PoleJidelnicek.push(this.state.dopolednisvacina)
    }

    changeDopolednisvacina(value){
        this.setState({
          dopolednisvacina:value
        })
      }
    
      changeDopolednisvacina1(value){
        this.setState({
          dopolednisvacina1:value
        })
      }
    
      changeDopolednisvacina2(value){
        this.setState({
          dopolednisvacina2:value
        })
      }
    
      changeDopolednisvacina3(value){
        this.setState({
          dopolednisvacina3:value
        })
      }
    
      changeDopolednisvacina4(value){
        this.setState({
          dopolednisvacina4:value
        })
      }

      render()
      {
          return(
            <div className = "divdopolednisvacina">
            <label className = "labeldopolednisvacina">Dopolední Svačina</label><br></br>
            <input onChange = { e => this.changeDopolednisvacina(e.target.value)} type = "text" value = {this.state.dopolednisvacina}/>{' '}
          <input onChange = { e => this.changeDopolednisvacina1(e.target.value)} type = "text" value = {this.state.dopolednisvacina1}/>{' '}
          <input onChange = { e => this.changeDopolednisvacina2(e.target.value)} type = "text" value = {this.state.dopolednisvacina2}/>{' '}
          <input onChange = { e => this.changeDopolednisvacina3(e.target.value)} type = "text" value = {this.state.dopolednisvacina3}/>{' '}
          <input onChange = { e => this.changeDopolednisvacina4(e.target.value)} type = "text" value = {this.state.dopolednisvacina4}/>{' '}
          </div>
          )
      }
}

export default DopoledniSvacina;