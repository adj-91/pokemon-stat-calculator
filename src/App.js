import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokeInfo from './components/pokeinfo/index.js';
import OppPokemon from './components/oppPokemon/index.js';
import Comparison from './components/comparison/index.js';
import './App.css';

const App = () => { //this is the main function to render page

  const [pokemonInfo, infoFunc] = useState({});
  const [entry, entryFunc] = useState("");
  const [nature, addNature] = useState("Serious");
  const [statVal, valInput] = useState("");
  const [EV, addEV] = useState([255,255,255,255,255,255]);
  const [IV, addIV] = useState([31,31,31,31,31,31]);
  const [level, addLevel] = useState("");


  const dropdownHandler = (val) => {
    addNature(val);
  }

  const levelHandler = (val) => {
    addLevel(val.target.value);
  }

  const evHandler = (val, id) => {
    
    let value = val.target.value;
    valInput(value);

    let evArray = EV
    evArray.splice(id, 1, value)
    console.log(evArray);   
    addEV(evArray);            
    }

    const ivHandler = (val, id) => {
      let value = val.target.value;
      valInput(value);
  
      let ivArray = IV
      ivArray.splice(id, 1, value) 
      
      addIV(ivArray);
    }
  

  const textBoxListener = (val) => {
    entryFunc(val.target.value);
  }

  const pokemonHP = (base) => {
    
    let lvl = level;
    let iv = parseInt(IV[0]);
    let ev = parseInt(EV[0]);
    
    let evResult = Math.floor(ev/4)
    let formula1 = 2*base
    let formula2 = formula1+iv
    let formula3 = formula2+evResult
    let formula4 = formula3 * lvl
    let result = Math.floor(formula4/100+10)

    return result;
  }

  const pokemonStats = (base, num) => {   
    //base = stat being targeted, num = the stat 
    let lvl = level;
    let iv = parseInt(IV[num]);
    let ev = parseInt(EV[num]);
    
    let evResult = Math.floor(ev/4)
    let formula1 = 2*base
    let formula2 = formula1+iv
    let formula3 = formula2+evResult
    let formula4 = formula3 * lvl
    let result = Math.floor(formula4/100+5)

    let positiveNature = Math.floor(result*1.1)
    let negativeNature = Math.floor(result/0.9)
    

    //natures not properly applied - needs fixing
    // let positiveNatures = { 
    // positiveatk: ["Adamant", "Lonely", "Brave", "Naughty"],
    // positivedef: ["Bold", "Relaxed", "Impish", "Lax"],
    // positivespeed: ["Timid", "Hasty", "Jolly", "Naive"],
    // positivespec: ["Modest", "Mild", "Quiet", "Rash"],
    // positivespecd: ["Calm", "Gentle", "Sassy", "Careful"] }

    // let negativeNatures = {
    // negativeatk: ["Bold", "Timid", "Modest", "Calm"],
    // negativedef: ["Lonely", "Hasty", "Mild", "Gentle"],
    // negativespeed: ["Brave", "Relaxed", "Quiet", "Sassy"],
    // negativespec: ["Adamant", "Impish", "Jolly", "Careful"],
    // negativespecd: ["Naughty", "Lax", "Naive", "Rash"]
    // }

    // for(let i=0; i<positiveNatures.positiveatk.length; i++) {
    //   if (positiveNatures.positiveatk[i] === nature && num === 0) {
    //     return positiveNaturebonus;
    //   }
    //   else {
    //     return result;
    //   }
    // }

   // positive nature bonus
    if (nature === "Adamant" || nature === "Lonely" //attack
    || nature === "Brave" || nature === "Naughty" && num === 0) {
      return positiveNature;
    }
  
   else if (nature === "Bold" || nature === "Relaxed" //defence
    || nature === "Impish" || nature === "Lax" && num === 1) {
      return positiveNature;
    }

  else  if (nature === "Timid" || nature === "Hasty" //speed
    || nature === "Jolly" || nature === "Naive" && num === 2) {
      return positiveNature;
    }
   else if (nature === "Modest" || nature === "Mild" //special attack
    || nature === "Quiet" || nature === "Rash" && num === 3) {
      return positiveNature;
    }
  else  if (nature === "Calm" || nature === "Gentle" //special defence
    || nature === "Sassy" || nature === "Careful" && num === 4) {
      return positiveNature;
    } 

    //negative nature bonus
    if (nature === "Bold" || nature === "Timid" //neg attack
    || nature === "Modest" || nature === "Calm" && num === 0) {
      return negativeNature;
    }
  else  if (nature === "Lonely" || nature === "Hasty" //neg defence
    || nature === "Mild" || nature === "Gentle" && num === 1) {
      return negativeNature;
    }
 else   if (nature === "Brave" || nature === "Relaxed" //neg speed
    || nature === "Quiet" || nature === "Sassy" && num === 2) {
      return negativeNature;
    }
  else  if (nature === "Adamant" || nature === "Impish" //neg special attack
    || nature === "Jolly" || nature === "Careful" && num === 3) {
      return negativeNature;
    }
  else  if (nature === "Naughty" || nature === "Lax"    //neg special defence
    || nature === "Naive" || nature === "Rash" && num === 4) {
      return negativeNature;
    }

    else { //if neutral nature
      return result;
    }

  }

  const pokemonGet = () => {
    let pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
    let pokemon = pokeApi.concat(entry);

    fetch(pokemon)
      .then(response => response.json())
      .then(data => {
        let pokeObj = data
        infoFunc(pokeObj)

      })
      .catch((error) => {
        console.error("error: ", error)
      });
  }

  return ( //main renderer
    <div className="App">
      <h1>Pokemon Statistics</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stat-calc">Pokemon Stat Calculator</Link>
            </li>
            <li>
              <Link to="/pokemon-info">Pokemon Information</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route exact path="/">
            <p>You are home</p>
          </Route>
          <Route exact path="/stat-calc">
            <p>you are in the stat calculator</p>
            <input type="Text" onChange={textBoxListener} />
              <button onClick={pokemonGet}>Search</button>
        {pokemonInfo.stats && <Comparison pokeName={pokemonInfo.name}
                //stats
                stat0={pokemonHP(pokemonInfo.stats[0].base_stat)} stat1={pokemonStats(pokemonInfo.stats[1].base_stat,1)}
                stat2={pokemonStats(pokemonInfo.stats[2].base_stat,2)} stat3={pokemonStats(pokemonInfo.stats[3].base_stat,3)}
                stat4={pokemonStats(pokemonInfo.stats[4].base_stat,4)} stat5={pokemonStats(pokemonInfo.stats[5].base_stat,5)}
                sprite={pokemonInfo.sprites.front_default} 
                types={pokemonInfo.types} abilities={pokemonInfo.abilities} 

                //EVs, IVs and level
                level={(e)=>levelHandler(e)}
                EV1={(e)=>evHandler(e,"0")} EV2={(e)=>evHandler(e,"1")} EV3={(e)=>evHandler(e,"2")}
                EV4={(e)=>evHandler(e,"3")} EV5={(e)=>evHandler(e,"4")} EV6={(e)=>evHandler(e,"5")}

                IV1={(e)=>ivHandler(e,"0")} IV2={(e)=>ivHandler(e,"1")} IV3={(e)=>ivHandler(e,"2")}
                IV4={(e)=>ivHandler(e,"3")} IV5={(e)=>ivHandler(e,"4")} IV6={(e)=>ivHandler(e,"5")}
                //natures
                natureBox={nature} nature1={()=>dropdownHandler("Lonely")} nature2={()=>dropdownHandler("Brave")}
                nature3={()=>dropdownHandler("Adamant")} nature4={()=>dropdownHandler("Naughty")} 
                nature5={()=>dropdownHandler("Bold")} nature6={()=>dropdownHandler("Relaxed")}
                nature7={()=>dropdownHandler("Impish")} nature8={()=>dropdownHandler("Lax")}
                nature9={()=>dropdownHandler("Timid")} nature10={()=>dropdownHandler("Hasty")}
                nature11={()=>dropdownHandler("Jolly")} nature12={()=>dropdownHandler("Naive")}
                nature13={()=>dropdownHandler("Modest")} nature14={()=>dropdownHandler("Mild")}
                nature15={()=>dropdownHandler("Quiet")} nature16={()=>dropdownHandler("Rash")}
                nature17={()=>dropdownHandler("Calm")} nature18={()=>dropdownHandler("Gentle")}
                nature19={()=>dropdownHandler("Sassy")} nature20={()=>dropdownHandler("Careful")}
        />}
            
          </Route>
          <Route exact path="/pokemon-info">
            <div>
              <p>you are in the pokemon info page</p>
              <input type="Text" onChange={textBoxListener} />
              <button onClick={pokemonGet}>Search</button>
              {pokemonInfo.stats && <PokeInfo pokeName={pokemonInfo.name}
                stat0={pokemonInfo.stats[0].base_stat} stat1={pokemonInfo.stats[1].base_stat}
                stat2={pokemonInfo.stats[2].base_stat} stat3={pokemonInfo.stats[3].base_stat}
                stat4={pokemonInfo.stats[4].base_stat} stat5={pokemonInfo.stats[5].base_stat}
                types={pokemonInfo.types} abilities={pokemonInfo.abilities} 
                height={pokemonInfo.height} weight={pokemonInfo.weight} 
                sprite={pokemonInfo.sprites.front_default} dex={pokemonInfo.id}
                shinySprite={pokemonInfo.sprites.front_shiny} moves={pokemonInfo.moves}
                />}
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}



export default App;