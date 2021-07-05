import React from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import './jidelnicek.css';


  const SaveDataPole = [];





class Nastaveni_aplikace extends React.Component

{
 
 constructor(props){
   super(props);
   this.state = {
    jmeno : '',
    pocet_dni : "",
    vaha : "",
    vyska : ""
  };
  this.ChangeVyska = this.ChangeVyska.bind(this);
  this.ChangeVaha = this.ChangeVaha.bind(this);
  this.ChangeJmeno = this.ChangeJmeno.bind(this);
  this.ChangePocet_dni=this.ChangePocet_dni.bind(this);
  this.onSubmitSaveData=this.onSubmitSaveData.bind(this);
  

  
 }
 
   

 ChangeVyska(value){
  this.setState({
       
       vyska:value
  });
}

ChangeVaha(value){
  this.setState({
       
       vaha:value
  });
}
ChangeJmeno(value){
  this.setState({
       
       jmeno:value
  });
}
ChangePocet_dni(value){
  this.setState({
       
       pocet_dni:value
  });
}



  onSubmitSaveData(e)
  {
  if(SaveDataPole.length >= 4 )
  {
    alert("Účet už máte jednou vytvořený!")
  }  
  else
  { 
  
  if(this.state.jmeno.length > 0)
  {
    SaveDataPole.push("Jméno: " + this.state.jmeno)
  }
  if(this.state.pocet_dni.length>0)
  {
    SaveDataPole.push("Počet dní " + this.state.pocet_dni)
  }
  if(this.state.vaha.length > 0)
  {
    SaveDataPole.push("Váha: " + this.state.vaha)
  }
  if(this.state.vyska.length > 0)
  {
    SaveDataPole.push("Výška:" + this.state.vyska)
  }
  else
  {
    alert("Vyplnte dotaznik")
  }
}

    e.preventDefault();
    
  }

  
  
  

render()
{
    
    return( <div>
      <p>{SaveDataPole[0]}</p>
         <Container className = "container" fluid="sm">
  <Row>
    <Col>
    <Form  onSubmit = {this.onSubmitSaveData}>
  <Form.Group controlId="name">
    <Form.Label>Jméno</Form.Label> 
    <Form.Control onChange={e => this.ChangeJmeno(e.target.value)} type="text" placeholder="Jméno..." value = {this.state.jmeno}  />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select" value = {this.state.pocet_dni} onChange={e => this.ChangePocet_dni(e.target.value)}>
      <option>7 denní</option>
      <option>14 denní</option>
      <option>21 denní</option>
      <option>28 denní</option>
      
    </Form.Control>
  </Form.Group>
<Form.Group>
    <Row>
        <Col>
    <Form.Label>Váha</Form.Label>
    <Form.Control  type = "number" placeholder = "váha... kg" value = {this.state.vaha} onChange={e => this.ChangeVaha(e.target.value)}/>
    </Col>
    <Col>
    <Form.Label>Výška</Form.Label>
    <Form.Control  type = "number" placeholder = "výška... cm" value = {this.state.vyska} onChange={e => this.ChangeVyska(e.target.value)}/>
    </Col>
    </Row>
</Form.Group>


<FormGroup>
<Button type="submit" value="Submit" > Uložit</Button>
</FormGroup>
</Form>
    </Col>
  </Row>
</Container>

    
        </div>
    )

}
}
 
  
export default Nastaveni_aplikace;
