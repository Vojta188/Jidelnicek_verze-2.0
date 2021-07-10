
import React from 'react';
import { Form, Button, Col, Container, FormGroup } from 'react-bootstrap';
import {SaveDataPole} from './PoleProUlozeni';
import {Forms,nacteniformulare} from './Formulář_Jidelnicku';
import { PoleJidelnicek } from './PoleProUlozeni';




import "./jidelnicek.css"


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
  nacteniformulare();
  PoleJidelnicek[0][0].push("1.den");
}

druhyden()
{
  nacteniformulare();
  PoleJidelnicek.push("2.den");
}

tretiden()
{
  nacteniformulare();
  PoleJidelnicek.push("3.den");
}

ctvrtyden()
{
  nacteniformulare();
  PoleJidelnicek.push("4.den");
}

patyden()
{
  nacteniformulare();
  PoleJidelnicek.push("5.den");
}

sestyden()
{
  nacteniformulare();
  PoleJidelnicek.push("6.den");
}

sedmyden()
{
  nacteniformulare();
  PoleJidelnicek.push("7.den");
}

osmyden()
{
  nacteniformulare();
  PoleJidelnicek.push("8.den");
}

devatyden()
{
  nacteniformulare();
  PoleJidelnicek.push("9.den");
}

desatyden()
{
  nacteniformulare();
  PoleJidelnicek.push("10.den");
}

jedenactyden(){
  nacteniformulare();
  PoleJidelnicek.push("11.den");
}

dvanactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("12.den")
}

trinactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("13.den");
}

ctrnactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("14.den");
}

patnactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("15.den");
}

sestnactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("16.den");
}

sedmnactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("17.den")
}

osmnactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("18.den");
}

devatenactyden()
{
  nacteniformulare();
  PoleJidelnicek.push("19.den");
}

dvacatyden()
{
  nacteniformulare();
  PoleJidelnicek.push("20.den");
}

dvacatyprvniden()
{
  nacteniformulare();
  PoleJidelnicek.push("21.den");
}

dvacatydruhyden()
{
  nacteniformulare();
  PoleJidelnicek.push("22.den");
}

dvacatytretiden()
{
  nacteniformulare();
  PoleJidelnicek.push("23.den");
}

dvacatyctvrtyden()
{
  nacteniformulare();
  PoleJidelnicek.push("24.den");
}

dvacatypatyden()
{
  nacteniformulare();
  PoleJidelnicek.push("25.den");
}
dvacatysestyden()
{
  nacteniformulare();
  PoleJidelnicek.push("26.den");

}

dvacatysedmyden()
{
  nacteniformulare();
  PoleJidelnicek.push("27.den");
}

dvacatyosmyden()
{
  nacteniformulare();
  PoleJidelnicek.push("28.den");
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