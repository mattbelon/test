import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import Header from './components/Header.js'
import FullCard from './components/FullCard.js'

function App() {
  const [toggle, setToggled] = useState(false)
  const [name, saveName] = useState("");
  const [lastName, saveLastname] = useState("");
  const [num, saveNum] = useState("");
  const [pic, savePic] = useState("");
  const [email, saveEmail] = useState("");
  const [city, saveCity] = useState("");
  const [country, saveCountry] = useState("");
  const [profiles, setProfiles] = useState([]);

  const queryApi = async () =>{
    const url =`https://randomuser.me/api/`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    saveName(resultado.results[0].name.first)
    saveLastname(resultado.results[0].name.last)
    saveNum(resultado.results[0].cell)
    savePic(resultado.results[0].picture.large)
    saveEmail(resultado.results[0].email)
    saveCity(resultado.results[0].location.city)
    saveCountry(resultado.results[0].location.country)
  }
  
  useEffect( () =>{
    queryApi()
  }, []);
  const extra = toggle === false ? "": <FullCard city={city} country={country} num={num} />
  const extraSave = toggle === false ? "": <Button onClick={ () => saveProfiles()}>Save</Button> 

  function saveProfiles(){
    setProfiles(profiles.concat({name, lastName, email, city, country, num}));
        console.log(profiles)
  }

  function deleteItem(index){
    var newList = profiles;
    var tem = newList.splice(index, 1);
    saveProfiles(tem)
//    const data =newList.splice(index, 1);
  //  saveProfiles(...data);
    console.log("index selected" + index)
  }
  return (
    <div className="container">
      <Header titulo="User manager"></Header>
      <div className="row">
          <div className="col align-items-center">
          <Button onClick={queryApi}>New user</Button>
          </div>
      </div>
      
      <div className="row">
        <div className="col-md">
              <div className="card" style={{ width: "18rem"}}>
                <img src={pic} style={{  width: "100%"}} />

                  <div className="card-body">
                  <h3>{name} {lastName}</h3>
                  <p className="title">{email}</p>
                  </div>
                  {
                  <Button onClick={ () => setToggled(!toggle)}>
                    {toggle === false ? "More info" : "Less Info"}
                    </Button>
                  }
                </div>

         </div>
      
         <div className="col-md">     
            {extra}
            {extraSave}
         </div>

         </div>
         <div className="row">   
                {profiles.map((item, index)=>  
                (
                  <>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title"><h3>{item.name}</h3></div>
                      <ul>
                      <li>{item.num}</li>
                      <li>{item.email}</li>
                      <li>{item.city}</li>
                      <li>{item.country}</li>
                      </ul>
                      <Button onClick={() => deleteItem(index)}>Delete</Button>
                      </div>
                  </div>
                  </>
                )
                  )}
                  

              </div>
          </div>
  );
}

export default App;
