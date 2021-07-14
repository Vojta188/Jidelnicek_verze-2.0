import React from 'react';
import "./formular_jidelnicku.css";

import { PoleJidelnicek, UlozitDopole } from './PoleProUlozeni';
 



 
class Forms extends React.Component
{
 constructor(props){
   super(props);
   this.state = { 
     snidane1: '',
     snidane2: '',
     snidane3: '',
     snidane4: '',
     snidane5: '',

     dopolednisvacina1: '',
     dopolednisvacina2: '',
     dopolednisvacina3: '',
     dopolednisvacina4: '',
     dopolednisvacina5: '',
     
     obed1: '',
     obed2: '',
     obed3: '',
     obed4: '',
     obed5: '',

     odpolednisvacina1:'',
     odpolednisvacina2:'',
     odpolednisvacina3:'',
     odpolednisvacina4:'',
     odpolednisvacina5:'',

     vecere1:'',
     vecere2:'',
     vecere3:'',
     vecere4:'',
     vecere5:'',

     druhavecere1:'',
     druhavecere2:'',
     druhavecere3:'',
     druhavecere4:'',
     druhavecere5:'',

   };
   this.changesnidane1 = this.changesnidane1.bind(this);
   this.changesnidane2 = this.changesnidane2.bind(this);
   this.changesnidane3 = this.changesnidane3.bind(this);
   this.changesnidane4 = this.changesnidane4.bind(this);
   this.changesnidane5 = this.changesnidane5.bind(this);

   this.changedopolednisvacina1 = this.changedopolednisvacina1.bind(this);
   this.changedopolednisvacina2 = this.changedopolednisvacina2.bind(this);
   this.changedopolednisvacina3 = this.changedopolednisvacina3.bind(this);
   this.changedopolednisvacina4 = this.changedopolednisvacina4.bind(this);
   this.changedopolednisvacina5 = this.changedopolednisvacina5.bind(this);

   this.changeobed1 = this.changeobed1.bind(this);
   this.changeobed2 = this.changeobed2.bind(this);
   this.changeobed3 = this.changeobed3.bind(this);
   this.changeobed4 = this.changeobed4.bind(this);
   this.changeobed5 = this.changeobed5.bind(this);

   this.changeodpolednisvacina1 = this.changeodpolednisvacina1.bind(this);
   this.changeodpolednisvacina2 = this.changeodpolednisvacina2.bind(this);
   this.changeodpolednisvacina3 = this.changeodpolednisvacina3.bind(this);
   this.changeodpolednisvacina4 = this.changeodpolednisvacina4.bind(this);
   this.changeodpolednisvacina5 = this.changeodpolednisvacina5.bind(this);
   
   this.changevecere1 = this.changevecere1.bind(this);
   this.changevecere2 = this.changevecere2.bind(this);
   this.changevecere3 = this.changevecere3.bind(this);
   this.changevecere4 = this.changevecere4.bind(this);
   this.changevecere5 = this.changevecere5.bind(this);

   this.changedruhavecere1 = this.changedruhavecere1.bind(this);
   this.changedruhavecere2 = this.changedruhavecere2.bind(this);
   this.changedruhavecere3 = this.changedruhavecere3.bind(this);
   this.changedruhavecere4 = this.changedruhavecere4.bind(this);
   this.changedruhavecere5 = this.changedruhavecere5.bind(this);

  

    this.handleSubmit = this.handleSubmit.bind(this);
 }
changesnidane1(value)
{
  this.setState({snidane1:value});
}

changesnidane2(value)
{
  this.setState({snidane2:value});
}

changesnidane3(value)
{
  this.setState({snidane3:value});
}

changesnidane4(value)
{
  this.setState({snidane4:value});
}

changesnidane5(value)
{
  this.setState({snidane5:value});
}

changedopolednisvacina1(value)
{
  this.setState({dopolednisvacina1:value});
}
changedopolednisvacina2(value)
{
  this.setState({dopolednisvacina2:value});
}
changedopolednisvacina3(value)
{
  this.setState({dopolednisvacina3:value});
}
changedopolednisvacina4(value)
{
  this.setState({dopolednisvacina4:value})
}
changedopolednisvacina5(value)
{
  this.setState({dopolednisvacina5:value});
}

 changeobed1(value)
 {
  this.setState({obed1:value});
 }
 changeobed2(value)
 {
   this.setState({obed2:value});
 }
 changeobed3(value)
 {
   this.setState({obed3:value});
 }
 changeobed4(value)
 {
   this.setState({obed4:value});
 }
 changeobed5(value)
 { 
 this.setState({obed5:value});
 }
 changeodpolednisvacina1(value)
 {
   this.setState({odpolednisvacina1:value});
 }
 changeodpolednisvacina2(value)
 {
   this.setState({odpolednisvacina2:value});
 }
 changeodpolednisvacina3(value)
 {
   this.setState({odpolednisvacina3:value});
 }
 changeodpolednisvacina4(value)
 {
   this.setState({odpolednisvacina4:value});
 }
 changeodpolednisvacina5(value)
 {
   this.setState({odpolednisvacina5:value});
 }
 changevecere1(value)
{
  this.setState({vecere1:value});
}
changevecere2(value)
{
  this.setState({vecere2:value});
}
changevecere3(value)
{
  this.setState({vecere3:value});
}
changevecere4(value)
{
  this.setState({vecere4:value});
}
changevecere5(value)
{
  this.setState({vecere5:value});
}
changedruhavecere1(value)
{
this.setState({druhavecere1:value});
}
changedruhavecere2(value)
{
  this.setState({druhavecere2:value});
}
changedruhavecere3(value)
{
  this.setState({druhavecere3:value});
}
changedruhavecere4(value)
{
  this.setState({druhavecere4:value});
}
changedruhavecere5(value)
{
  this.setState({druhavecere5:value});
}
 
 handleSubmit(event)
 {
  event.preventDefault(); 
   alert("Uloženo" + this.state.snidane1);
PoleJidelnicek[0][1].push(this.state.snidane1, this.state.snidane2,this.state.snidane3,this.state.snidane4,this.state.snidane5);
PoleJidelnicek[1][0].push(this.state.dopolednisvacina1, this.state.dopolednisvacina2, this.state.dopolednisvacina3,this.state.dopolednisvacina4,this.state.dopolednisvacina5);
PoleJidelnicek[2][0].push(this.state.obed1, this.state.obed2, this.state.obed3, this.state.obed4, this.state.obed5); 
PoleJidelnicek[3][0].push(this.state.odpolednisvacina1, this.state.odpolednisvacina2,this.state.odpolednisvacina3,this.state.odpolednisvacina4,this.state.odpolednisvacina5);
PoleJidelnicek[4][0].push(this.state.vecere1,this.state.vecere2,this.state.vecere3,this.state.vecere4,this.state.vecere5);
PoleJidelnicek[5][0].push(this.state.druhavecere1,this.state.druhavecere2,this.state.druhavecere3,this.state.druhavecere4,this.state.druhavecere5);

 }
  
  zobrazit()
  {
    document.getElementById("zobrazit").innerHTML = PoleJidelnicek;
    document.getElementById("zobrazit1").innerHTML = UlozitDopole;
  }


  zobrazeni = document.getElementsByClassName("Formular");
  
  nacteniformulare()
   {
     
     this.zobrazeni[0].style.display = "block";
     
   }




  render(){
    return(






      <div id = "Formular" className = "Formular">





      <form onSubmit = {this.handleSubmit} >
        <label>Snídaně</label>
        <div>
        <input type = "text" onChange = {e => this.changesnidane1(e.target.value)} value = {this.state.snidane1} className = "snidane1"/>
        <input type = "text" onChange = {e => this.changesnidane2(e.target.value)} value = {this.state.snidane2} className = "snidane1"/>
        <input type = "text" onChange = {e => this.changesnidane3(e.target.value)} value = {this.state.snidane3} className = "snidane1"/>
        <input type = "text" onChange = {e => this.changesnidane4(e.target.value)} value = {this.state.snidane4} className = "snidane1"/>
        <input type = "text" onChange = {e => this.changesnidane5(e.target.value)} value = {this.state.snidane5} className = "snidane1"/>
        </div>
        <label>Dopolední Svačina</label>
        <div>
        <input type = "text" onChange = {e => this.changedopolednisvacina1(e.target.value)} value = {this.state.dopolednisvacina1} className = "dopolednisvacina"/>
        <input type = "text" onChange = {e => this.changedopolednisvacina2(e.target.value)} value = {this.state.dopolednisvacina2} className = "dopolednisvacina"/>
        <input type = "text" onChange = {e => this.changedopolednisvacina3(e.target.value)} value = {this.state.dopolednisvacina3} className = "dopolednisvacina"/>
        <input type = "text" onChange = {e => this.changedopolednisvacina4(e.target.value)} value = {this.state.dopolednisvacina4} className = "dopolednisvacina"/>
        <input type = "text" onChange = {e => this.changedopolednisvacina5(e.target.value)} value = {this.state.dopolednisvacina5} className = "dopolednisvacina"/>
        </div>
        <label>Oběd</label>
        <div>
          <input type = "text" onChange = {e=>this.changeobed1(e.target.value)} value = {this.state.obed1} className = "obed" /> 
          <input type = "text" onChange = {e=>this.changeobed2(e.target.value)} value = {this.state.obed2} className = "obed" /> 
          <input type = "text" onChange = {e=>this.changeobed3(e.target.value)} value = {this.state.obed3} className = "obed" /> 
          <input type = "text" onChange = {e=>this.changeobed4(e.target.value)} value = {this.state.obed4} className = "obed" /> 
          <input type = "text" onChange = {e=>this.changeobed5(e.target.value)} value = {this.state.obed5} className = "obed" /> 
        </div>
        <label>Odpolední Svačina</label>
        <div>
          <input type = "text" onChange = {e => this.changeodpolednisvacina1(e.target.value)} value = {this.state.odpolednisvacina1} className = "odpolednisvacina" />
          <input type = "text" onChange = {e => this.changeodpolednisvacina2(e.target.value)} value = { this.state.odpolednisvacina2} className = "odpolednisvacina" />
          <input type = "text" onChange = {e => this.changeodpolednisvacina3(e.target.value)} value = { this.state.odpolednisvacina3} className = "odpolednisvacina" />
          <input type = "text" onChange = {e => this.changeodpolednisvacina4(e.target.value)} value = { this.state.odpolednisvacina4} className = "odpolednisvacina" />
          <input type = "text" onChange = {e => this.changeodpolednisvacina5(e.target.value)} value = { this.state.odpolednisvacina5} className = "odpolednisvacina" />
        </div>
        <label>Večeře</label>
        <div>
          <input type = "text" onChange = {e => this.changevecere1(e.target.value)} value = {this.state.vecere1} />
          <input type = "text" onChange = {e => this.changevecere2(e.target.value)} value = {this.state.vecere2} />
          <input type = "text" onChange = {e => this.changevecere3(e.target.value)} value = {this.state.vecere3} />
          <input type = "text" onChange = {e => this.changevecere4(e.target.value)} value = {this.state.vecere4} />
          <input type = "text" onChange = {e => this.changevecere5(e.target.value)} value = {this.state.vecere5} />
        </div>  
        <label>Druhá večeře</label>
        <div>
          <input type = "text" onChange = { e => this.changedruhavecere1(e.target.value)} value = {this.state.druhavecere1}/>
          <input type = "text" onChange = { e => this.changedruhavecere2(e.target.value)} value = {this.state.druhavecere2}/>
          <input type = "text" onChange = { e => this.changedruhavecere3(e.target.value)} value = {this.state.druhavecere3}/>
          <input type = "text" onChange = { e => this.changedruhavecere4(e.target.value)} value = {this.state.druhavecere4}/>
          <input type = "text" onChange = { e => this.changedruhavecere5(e.target.value)} value = {this.state.druhavecere5}/>
        </div>      
        <input type="button" onClick = {this.handleSubmit}  value="Uložit"/> 
    </form>

    
    <input type = "button" onClick = {this.zobrazit} value ="zobrazit"/>
        <p id = "zobrazit"></p>
        <p id = "zobrazit1"></p>
      </div>

    )
  }
}

export  {Forms};