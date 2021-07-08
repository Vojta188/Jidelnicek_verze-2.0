import { Form} from 'react-bootstrap';
import React from 'react';
import "./formular_jidelnicku.css";
import Snidane from './snidane';
import DopoledniSvacina from './dopolednisvacina';
import Obed from './obed';
import OdpoledniSvacina from './odpolednisvacina';
import Vecere from './vecere';
import DruhaVecere from './druhavecere';
import { PoleJidelnicek } from './PoleProUlozeni';
import Nastaveni_aplikace from './nastaveni_aplikace';

let saveform = new Snidane;
let dopsvaform = new DopoledniSvacina;



  var zobrazeni = document.getElementsByClassName("Formular");
  
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
       
    }
    
  }
 
  

  zobrazit()
  {
    document.getElementById("zobrazit").innerHTML = PoleJidelnicek;
  }
  render(){
    return(
      <div id = "Formular" className = "Formular">
      <Form>
        <Snidane/>
        <DopoledniSvacina/>
        <Obed/>
        <OdpoledniSvacina/>
        <Vecere/>
        <DruhaVecere/>
        <input onClick = {saveform.SaveForm()} className = "buttonulozit" type = "button" value = "Uložit Jídelníček"/>
        <input onClick = {this.zobrazit} type = "button" value ="zobrazit"/>
        <p id = "zobrazit"></p>
    </Form>
      </div>

    )
  }
}

export  {Forms, nacteniformulare};