import { Form} from 'react-bootstrap';
import React from 'react';
import "./formular_jidelnicku.css";
import Snidane from './snidane';
import DopoledniSvacina from './dopolednisvacina';
import Obed from './obed';
import OdpoledniSvacina from './odpolednisvacina';
import Vecere from './vecere';
import DruhaVecere from './druhavecere';

  var zobrazeni = document.getElementsByClassName("Formular")
 function nacteniformulare()
  {
    
    zobrazeni[0].style.display = "block";
    
  }

 
class Forms extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state =  {
       
      druhavecere:''
    }
    
    this.changeDruhavecere = this.changeDruhavecere.bind(this);

  }
 
  changeDruhavecere(value)
  {
    this.setState({
      druhavecere:value
    })
  }

  onSubmitSaveForm(e){

  }

  render(){
    return(
      <div id = "Formular" className = "Formular">
      <Form onSubmit ={this.onSubmitSaveForm} >
        <Snidane/>

        <DopoledniSvacina/>

        <Obed/>

        <OdpoledniSvacina/>
        

        <Vecere/>

        <DruhaVecere/>

        <button className = "buttonulozit">Uložit Jídelníček</button>

      </Form>
      </div>

    )
  }
}

export  {Forms, nacteniformulare};