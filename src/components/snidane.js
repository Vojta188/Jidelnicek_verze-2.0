import React from "react";
import { PoleJidelnicek } from "./PoleProUlozeni";
let poleJidlenicek = PoleJidelnicek 




class Snidane extends React.Component{
    constructor(props){
        super(props)
        this.state =  {
            snidane: '',
            snidane1:'',
            snidane2:'',
            snidane3:'',
            snidane4:''
        }
        this.changeSnidane = this.changeSnidane.bind(this);
    this.changeSnidane1 = this.changeSnidane1.bind(this);
    this.changeSnidane2= this.changeSnidane2.bind(this);
    this.changeSnidane3= this.changeSnidane3.bind(this);
    this.changeSnidane4= this.changeSnidane4.bind(this);
    }

     SaveForm()
    {
      poleJidlenicek.push(this.state.snidane);
      poleJidlenicek.push(this.state.snidane1);
      poleJidlenicek.push(this.state.snidane2);
      poleJidlenicek.push(this.state.snidane3);
      poleJidlenicek.push(this.state.snidane4);
    }

    changeSnidane1(value)
  {
    this.setState({
      snidane1:value
    })
  }

  changeSnidane(value)
  {
    this.setState({

      snidane:value
      
    })
  }

  changeSnidane2(value)
  {
    this.setState({
      snidane2:value
    })
  }



  changeSnidane3(value)
  {
    this.setState({
      snidane3:value
    })
  }

  changeSnidane4(value)
  {
    this.setState({
      snidane4:value
    })
  }

  render()
  {
      return(
        <div className = "snidane">
        <label className = "snidane">Snídaně</label><br></br>
        <input onChange={e => this.changeSnidane(e.target.value)} type = "text" value = {this.state.snidane}/>{' '}
        
        <input onChange={e => this.changeSnidane1(e.target.value)} type = "text" value = {this.state.snidane1}/>{' '}
        <input onChange={e => this.changeSnidane2(e.target.value)}  type = "text" value = {this.state.snidane2}/>{' '}
        <input onChange={e => this.changeSnidane3(e.target.value)}  type = "text" value = {this.state.snidane3}/>{' '}
        <input onChange={e => this.changeSnidane4(e.target.value)}  type = "text" value = {this.state.snidane4}/>{' '}
        </div>

      )
  }
}
export {Snidane};

