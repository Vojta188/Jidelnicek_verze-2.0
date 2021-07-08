import { Form} from 'react-bootstrap';
import React from 'react';
import "./formular_jidelnicku.css";
import {Snidane} from './snidane';
import DopoledniSvacina from './dopolednisvacina';
import Obed from './obed';
import OdpoledniSvacina from './odpolednisvacina';
import Vecere from './vecere';
import DruhaVecere from './druhavecere';
import { PoleJidelnicek } from './PoleProUlozeni';

let save = Snidane.SaveForm();

  var zobrazeni = document.getElementsByClassName("Formular");
  let poleJidelnicek  = PoleJidelnicek
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
    document.getElementById("zobrazit").innerHTML = poleJidelnicek;
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
        <input onClick = {this.zobrazit, save} className = "buttonulozit" type = "button" value = "Uložit Jídelníček"/>
        <p id = "zobrazit"></p>
    </Form>
      </div>

    )
  }
}

export  {Forms, nacteniformulare};