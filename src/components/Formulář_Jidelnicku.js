import { Form, Button, FormGroup, Row, Col } from 'react-bootstrap';
import React from 'react';
import "./formular_jidelnicku.css";
    
class Forms extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state =  {
      snidane: '',
      dopolednisvacina:'',
      obed:'',
      odpolednisvacina:'',
      vecere:'',
      druhavecere:''
    }
  }

  render(){
    return(
      <div id = "Formular" className = "Formular">
      <Form>
        <div className = "snidane">
        <label className = "snidane">Snídaně</label><br></br>
        <input/>{' '}
        
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        </div>

        <div className = "divdopolednisvacina">
          <label className = "labeldopolednisvacina">Dopolední Svačina</label><br></br>
          <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        </div>


        <div className = "divobed">
          <label className = "labelobed">Oběd</label><br></br>
          <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        </div>


        <div className = "divodpolednisvacina">
          <label className = "labelodpolednisvacina">Odpolední Svačina</label><br></br>
          <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        </div>


        <div className = "divvecere">
          <label className = "labelvecere">Večeře</label><br></br>
          <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        </div>

        <div className = "divdruhavecere">
          <label className = "labeldruhavecere">Druhá Večeře</label><br></br>
          <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        <input/>{' '}
        </div>

        <button className = "buttonulozit">Uložit Jídelníček</button>

      </Form>
      </div>

    )
  }
}

export default Forms;