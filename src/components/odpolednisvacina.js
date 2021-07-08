import React from 'react';

class OdpoledniSvacina extends React.Component{
    constructor(props)
    {
        super(props)
        this.state =  {
     
            odpolednisvacina:'',
            odpolednisvacina1:'',
            odpolednisvacina2:'',
            odpolednisvacina3:'',
            odpolednisvacina4:''
        }
        this.changeOdpolednisvacina = this.changeOdpolednisvacina.bind(this);
        this.changeOdpolednisvacina1 = this.changeOdpolednisvacina1.bind(this);
        this.changeOdpolednisvacina2 = this.changeOdpolednisvacina2.bind(this);
        this.changeOdpolednisvacina3 = this.changeOdpolednisvacina3.bind(this);
        this.changeOdpolednisvacina4 = this.changeOdpolednisvacina4.bind(this);
    }
    changeOdpolednisvacina(value){
        this.setState({
          odpolednisvacina:value
        })
      }
      changeOdpolednisvacina1(value){
        this.setState({
          odpolednisvacina1:value
        })
      }
      changeOdpolednisvacina2(value){
        this.setState({
          odpolednisvacina2:value
        })
      }
      changeOdpolednisvacina3(value){
        this.setState({
          odpolednisvacina3:value
        })
      }
      changeOdpolednisvacina4(value){
        this.setState({
          odpolednisvacina4:value
        })
      }

      render()
      {
          return(
            <div className = "divodpolednisvacina">
            <label className = "labelodpolednisvacina">Odpolední Svačina</label><br></br>
            <input onChange = { e => this.changeOdpolednisvacina(e.target.value)} type = "text" value = {this.state.odpolednisvacina}/>{' '}
          <input onChange = { e => this.changeOdpolednisvacina1(e.target.value)} type = "text" value = {this.state.odpolednisvacina1}/>{' '}
          <input onChange = { e => this.changeOdpolednisvacina2(e.target.value)} type = "text" value = {this.state.odpolednisvacina2}/>{' '}
          <input onChange = { e => this.changeOdpolednisvacina3(e.target.value)} type = "text" value = {this.state.odpolednisvacina3}/>{' '}
          <input onChange = { e => this.changeOdpolednisvacina4(e.target.value)} type = "text" value = {this.state.odpolednisvacina4}/>{' '}
          </div>
          )
      }
}


export default OdpoledniSvacina;