import Nastaveni_aplikace from './nastaveni_aplikace';
import React from 'react';
import { Form, Button, Col, Container, FormGroup } from 'react-bootstrap';


Nastaveni_aplikace.saveData;

class Btn extends React.Component
{
  constructor(props)
  {
    
    super(props)
    this.state = {
      snidane: '',
      dopoledni_svacina:'',
      obed:'',
      odpoledni_svacina:'',
      vecere: '',
      druha_vecere: ''
    }
  }
  button_pocet_dni()
  {
    if(SaveDataPole[1] == 7)
    {
      return(
        <FormGroup>
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      </FormGroup>

      )
    }



    if(SaveDataPole[1] == 14)
    {
      return(
        <FormGroup>
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      </FormGroup>

      )
    }


    if(SaveDataPole[1] == 28)
    {
      return(
        <FormGroup>
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      </FormGroup>

      )
    }


      alert(SaveDataPole)

  }


  render()
  {
    return(<div>
      <Container className = "container" fluid="sm">
          
          <Col>
          
          <Form>
            <Button onClick = {this.button_pocet_dni}>Načíst dny</Button>
            <button_pocet_dni/>
            
          </Form>
          
          </Col>
          
          </Container>
          </div>



    )
  }

}

export default Btn;