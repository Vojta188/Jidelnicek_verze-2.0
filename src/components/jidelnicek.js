
import React from 'react';
import { Form, Button, Col, Container, FormGroup } from 'react-bootstrap';
import {SaveDataPole} from './PoleProUlozeni';
import {Forms,nacteniformulare} from './Formulář_Jidelnicku';




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


 
btn_dny()
{
  nacteniformulare();
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
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "1.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "2.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "3.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "4.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "5.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "6.den"/>{' '}
              <input type = "button" onClick = {this.btn_dny}  className = "button" value = "7.den"/>{' '}
              
              </FormGroup>
            </div>

            <div id="ctrnact" className = "ctrnact"   >
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