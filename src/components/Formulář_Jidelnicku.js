import { Form, FormGroup, Button} from 'react-bootstrap';
import React from 'react';
import "./formular_jidelnicku.css";
import Snidane from './snidane';
import DopoledniSvacina from './dopolednisvacina';
import Obed from './obed';
import OdpoledniSvacina from './odpolednisvacina';
import Vecere from './vecere';
import DruhaVecere from './druhavecere';
import { PoleJidelnicek } from './PoleProUlozeni';
 
let saveform = new Snidane();
  var zobrazeni = document.getElementsByClassName("Formular");
  
 function nacteniformulare()
  {
    
    zobrazeni[0].style.display = "block";
    
  }

 
class Forms extends React.Component
{
  SaveFormFormular(e)
  {
    
    saveform.SaveForm();
    e.preventDefault()
    
  }
  
  zobrazit()
  {
    document.getElementById("zobrazit").innerHTML = saveform.state.snidane3;
  }
  render(){
    return(
      <div id = "Formular" className = "Formular">
      <Form onSubmit = {this.SaveFormFormular}>
        <Snidane/>
        <DopoledniSvacina/>
        <Obed/>
        <OdpoledniSvacina/>
        <Vecere/>
        <DruhaVecere/>
        <FormGroup>
        <Button type="submit" onClick = {this.SaveFormFormular} value="Submit" > Uložit</Button>
        </FormGroup>
    </Form>
    <input onClick = {this.zobrazit} type = "button" value ="zobrazit"/>
        <p id = "zobrazit"></p>
      </div>

    )
  }
}

export  {Forms, nacteniformulare};