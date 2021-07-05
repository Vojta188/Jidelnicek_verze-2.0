
import React from 'react';
import { Form, Button, Col, Container, FormGroup } from 'react-bootstrap';
import SaveDataPole from './PoleProUlozeni';
import Forms from './Formulář_Jidelnicku';

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
              <button className = "button">1.den</button>{' '}
              <button className = "button">2.den</button>{' '}
              <button className = "button">3.den</button>{' '}
              <button className = "button">4.den</button>{' '}
              <button className = "button">5.den</button>{' '}
              <button className = "button">6.den</button>{' '}
              <button className = "button">7.den</button>{' '}
              </FormGroup>
            </div>

            <div id="ctrnact" className = "ctrnact"   >
              <FormGroup>
              <button className = "button">1.den</button>{' '}
              <button className = "button">2.den</button>{' '}
              <button className = "button">3.den</button>{' '}
              <button className = "button">4.den</button>{' '}
              <button className = "button">5.den</button>{' '}
              <button className = "button">6.den</button>{' '}
              <button className = "button">7.den</button>{' '}
              <button className = "button">8.den</button>{' '}
              <button className = "button">9.den</button>{' '}
              <button className = "button">10.den</button>{' '}
              <button className = "button">11.den</button>{' '}
              <button className = "button">12.den</button>{' '}
              <button className = "button">13.den</button>{' '}
              <button className = "button">14.den</button>{' '}
              
              
              </FormGroup>
            </div>
            
            <div id="dvacetjedna" className = "dvacetjedna"   >
              <FormGroup>
              <button className = "button">1.den</button>{' '}
              <button className = "button">2.den</button>{' '}
              <button className = "button">3.den</button>{' '}
              <button className = "button">4.den</button>{' '}
              <button className = "button">5.den</button>{' '}
              <button className = "button">6.den</button>{' '}
              <button className = "button">7.den</button>{' '}
              <button className = "button">8.den</button>{' '}
              <button className = "button">9.den</button>{' '}
              <button className = "button">10.den</button>{' '}
              <button className = "button">11.den</button>{' '}
              <button className = "button">12.den</button>{' '}
              <button className = "button">13.den</button>{' '}
              <button className = "button">14.den</button>{' '}
              <button className = "button">15.den</button>{' '}
              <button className = "button">16.den</button>{' '}
              <button className = "button">17.den</button>{' '}
              <button className = "button">18.den</button>{' '}
              <button className = "button">19.den</button>{' '}
              <button className = "button">20.den</button>{' '}
              <button className = "button">21.den</button>{' '}
              </FormGroup>
            </div>

            <div id="dvacetosm" className = "dvacetosm"   >
            <button className = "button">1.den</button>{' '}
              <button className = "button">2.den</button>{' '}
              <button className = "button">3.den</button>{' '}
              <button className = "button">4.den</button>{' '}
              <button className = "button">5.den</button>{' '}
              <button className = "button">6.den</button>{' '}
              <button className = "button">7.den</button>{' '}
              <button className = "button">8.den</button>{' '}
              <button className = "button">9.den</button>{' '}
              <button className = "button">10.den</button>{' '}
              <button className = "button">11.den</button>{' '}
              <button className = "button">12.den</button>{' '}
              <button className = "button">13.den</button>{' '}
              <button className = "button">14.den</button>{' '}
              <button className = "button">15.den</button>{' '}
              <button className = "button">16.den</button>{' '}
              <button className = "button">17.den</button>{' '}
              <button className = "button">18.den</button>{' '}
              <button className = "button">19.den</button>{' '}
              <button className = "button">20.den</button>{' '}
              <button className = "button">21.den</button>{' '}
              <button className = "button">22.den</button>{' '}
              <button className = "button">23.den</button>{' '}
              <button className = "button">24.den</button>{' '}
              <button className = "button">25.den</button>{' '}
              <button className = "button">26.den</button>{' '}
              <button className = "button">27.den</button>{' '}
              <button className = "button">28.den</button>{' '}
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