
import React from 'react';
import { Form, Button, Col, Container, FormGroup } from 'react-bootstrap';
import {SaveDataPole} from './PoleProUlozeni';
import {Forms} from './Formulář_Jidelnicku';
import { PoleJidelnicek } from './PoleProUlozeni';
import { Pole } from './PoleProUlozeni';

import "./jidelnicek.css"
let formular = new Forms();

let Save = SaveDataPole;
var sedm = document.getElementsByClassName("sedm")
var ctrnact = document.getElementsByClassName("ctrnact")
var dvacetjedna = document.getElementsByClassName("dvacetjedna")
var dvacetosm = document.getElementsByClassName("dvacetosm")



class Btn extends React.Component
{
  constructor(props)
  {
    
    super(props)
    this.state = {
      
    }
    
  }

prvniden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("1.den");
  Pole()
}

druhyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("2.den");
  Pole();
}

tretiden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("3.den");
  Pole()
}

ctvrtyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("4.den");
  Pole()
}

patyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("5.den");
  Pole()
}

sestyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("6.den");
  Pole()
}

sedmyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("7.den");
  Pole()
}

osmyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("8.den");
  Pole()
}

devatyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("9.den");
  Pole()
}

desatyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("10.den");
  Pole()
}

jedenactyden(){
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("11.den");
  Pole()
}

dvanactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("12.den")
  Pole()
}

trinactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("13.den");
  Pole()
}

ctrnactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("14.den");
  Pole()
}

patnactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("15.den");
  Pole()
}

sestnactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("16.den");
  Pole()
}

sedmnactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("17.den")
  Pole()
}

osmnactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("18.den");
  Pole()
}

devatenactyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("19.den");
  Pole()
}

dvacatyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("20.den");
  Pole()
}

dvacatyprvniden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("21.den");
  Pole()
}

dvacatydruhyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("22.den");
  Pole()
}

dvacatytretiden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("23.den");
  Pole()
}

dvacatyctvrtyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("24.den");
  Pole()
}

dvacatypatyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("25.den");
  Pole()
}
dvacatysestyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("26.den");
  Pole()

}

dvacatysedmyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("27.den");
  Pole()
}

dvacatyosmyden()
{
  formular.nacteniformulare();
  PoleJidelnicek[0][0].push("28.den");
  Pole()
}


  button_pocet_dni()
  {
    
     if(Save[1] == 7)
    {
      
      sedm[0].style.display = "block";
    
    
    }
    
    
       if(Save[1] == 14)
    {
      ctrnact[0].style.display = "block";
      
      
    }


    if(Save[1] == 21)
    {
      dvacetjedna[0].style.display = "block";
    }


    if(Save[1] == 28)
    {
      dvacetosm[0].style.display = "block";
    }
   
    


 

    }
    
    

  render()
  
  {
    return(  <div className = "form">
      <Container className = "container" fluid="sm">
          
          <Col>
          
          <Form className = "Form">
            <Button onClick = {this.button_pocet_dni}>Načíst program</Button>
            <button_pocet_dni/>
            <div id="sedm" className = "sedm"   >
            
              <FormGroup>
              <input type = "button" onClick = {this.prvniden}  className = "button" value = "1.den"/>{' '}
              <input type = "button" onClick = {this.druhyden} className = "button" value = "2.den"/>{' '}
              <input type = "button" onClick = {this.tretiden}    className = "button" value = "3.den"/>{' '}
              <input type = "button" onClick = {this.ctvrtyden}   className = "button" value = "4.den"/>{' '}
              <input type = "button" onClick = {this.patyden}  className = "button" value = "5.den"/>{' '}
              <input type = "button" onClick = {this.sestyden}  className = "button" value = "6.den"/>{' '}
              <input type = "button" onClick = {this.sedmyden}  className = "button" value = "7.den"/>{' '}
              
              </FormGroup>
            </div>

            <div id="ctrnact" className = "ctrnact"   >
              <FormGroup>
              <input type = "button" onClick = {this.prvniden}  className = "button" value = "1.den"/>{' '}
              <input type = "button" onClick = {this.druhyden} className = "button" value = "2.den"/>{' '}
              <input type = "button" onClick = {this.tretiden}  className = "button" value = "3.den"/>{' '}
              <input type = "button" onClick = {this.ctvrtyden}  className = "button" value = "4.den"/>{' '}
              <input type = "button" onClick = {this.patyden}  className = "button" value = "5.den"/>{' '}
              <input type = "button" onClick = {this.sestyden}  className = "button" value = "6.den"/>{' '}
              <input type = "button" onClick = {this.sedmyden}  className = "button" value = "7.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny} className = "button" value = "8.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "9.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "10.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "11.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "12.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "13.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "14.den"/>{' '}
              
              
              </FormGroup>
            </div>
            
            <div id="dvacetjedna" className = "dvacetjedna"   >
              <FormGroup>
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "1.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "2.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "3.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "4.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "5.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "6.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "7.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "8.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "9.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny} className = "button" value = "10.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "11.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "12.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "13.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "14.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny} className = "button" value = "15.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "16.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "17.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "18.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "19.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny} className = "button" value = "20.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny} className = "button" value = "21.den"/>{' '}
              </FormGroup>
            </div>

            <div id="dvacetosm" className = "dvacetosm"   >
           <FormGroup>
           <input type = "button" onClick = {this.btn_dny}  className = "button" value = "1.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "2.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "3.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "4.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "5.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "6.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "7.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "8.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "9.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "10.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "11.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "12.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "13.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "14.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "15.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "16.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "17.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "18.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "19.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "20.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "21.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "22.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "23.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "24.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "25.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "26.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "27.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "28.den"/>{' '}
          </FormGroup>
            </div>
            
         <Forms/>
            
          </Form>
          
          </Col>
          
            
          </Container>
          </div>



    )
  }

}

export default Btn;