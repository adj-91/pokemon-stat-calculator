import PokeInfo from '../pokeinfo';
import './index.css';

const Comparison = (props) => {
    return(
    <div className="mainDiv">
      <p id="pokeName">pokemon: {props.pokeName}</p>
      <img id="image" src={props.sprite}></img>

      <div className="miscDisplay">
      {props.types.map((item, index) => <p id="statsText" key={index} > Type {index+1}: {item.type.name}</p>)}
      {props.abilities.map((item, index) => <p id="statsText" key={index}>Ability {index+1}: {item.ability.name}</p>)}
      </div>

      <div className="statsDisplay">
      {/*<p>Base stats:</p>*/}
         <p>level <input className="statInput" onChange={props.level} type="number" min="1" max="100" maxLength="3" defaultValue="50"></input></p>

        <div className="dropdown">
          <button className="dropbtn">{props.natureBox}</button>
          <div className="dropdown-content">
          
          <button onClick={props.nature1} >Lonely</button>  {/*10%+ attack, 10%- defence*/}
          <button onClick={props.nature2} >Brave</button>   {/*10%+ attack, 10%- speed*/}
          <button onClick={props.nature3} >Adamant</button>  {/*10%+ attack, 10%- specatk*/}
          <button onClick={props.nature4} >Naughty</button>  {/*10%+ attack, 10%- specdef*/}
          
          <button onClick={props.nature5} >Bold</button>     {/*10%+ def, 10%- attack*/}
          <button onClick={props.nature6} >Relaxed</button>  {/*10%+ def, 10%- speed*/}
          <button onClick={props.nature7} >Impish</button>   {/*10%+ def, 10%- specatk*/}
          <button onClick={props.nature8} >Lax</button>     {/*10%+ def, 10%- specdef*/}
          
          <button onClick={props.nature9} >Timid</button>    {/*10%+ speed, 10%- attack*/}
          <button onClick={props.nature10} >Hasty</button>   {/*10%+ speed, 10%- defence*/}
          <button onClick={props.nature11} >Jolly</button>   {/*10%+ speed, 10%- specatk*/}
          <button onClick={props.nature12} >Naive</button>   {/*10%+ speed, 10%- specdef*/}
          
          <button onClick={props.nature13} >Modest</button>  {/*10%+ specatk, 10%- attack*/}
          <button onClick={props.nature14} >Mild</button>    {/*10%+ specatk, 10%- defence*/}
          <button onClick={props.nature15} >Quiet</button>   {/*10%+ specatk, 10%- speed*/}
          <button onClick={props.nature16} >Rash</button>    {/*10%+ specatk, 10%- specdef*/}
          
          <button onClick={props.nature17} >Calm</button>  {/*10%+ specdef, 10%- attack*/}
          <button onClick={props.nature18} >Gentle</button>  {/*10%+ specdef, 10%- defence*/}
          <button onClick={props.nature19} >Sassy</button>  {/*10%+ specdef, 10%- speed*/}
          <button onClick={props.nature20} >Careful</button> {/*10%+ specdef, 10%- specatk*/}
         
          </div>
          </div>
        <div className="statRow1">
         <p>HP: {props.stat0} </p>
          <div>
          <p>EV</p>  
          <input className="statInput" onChange={props.EV1} type="number" min="0" max="255" maxLength="2" defaultValue="255" /> 
          <p>IV</p><input className="statInput" onChange={props.IV1} type="number" min="1" max="31" maxLength="2" defaultValue="255" /></div>
          <p>ATTACK: {props.stat1} </p>
          <div>
          <p>EV</p>
          <input className="statInput" onChange={props.EV2} type="number" min="0" max="255" maxLength="2" defaultValue="255" /> 
          <p>IV</p>
          <input className="statInput" onChange={props.IV2} type="number" min="1" max="31" maxLength="2" defaultValue="31" /></div>
          <p>DEFENCE: {props.stat2} </p>
          <div>
          <p>EV</p>
          <input className="statInput" onChange={props.EV3} type="number" min="0" max="255" maxLength="2" defaultValue="255" /> 
          <p>IV</p>
          <input className="statInput" onChange={props.IV3} type="number" min="1" max="31" maxLength="2" defaultValue="31" /></div>
          </div>
          
          <div className="statRow2">
          <p>SP. ATK: {props.stat3} </p>
          <div>
          <p>EV</p>
          <input className="statInput" onChange={props.EV4} type="number" min="0" max="255" maxLength="2" defaultValue="255" /> 
          <p>IV</p>
          <input className="statInput" onChange={props.IV4} type="number" min="1" max="31" maxLength="2" defaultValue="31" /></div>
          <p>SP. DEF: {props.stat4} </p>
          <div>
          <p>EV</p>
          <input className="statInput" onChange={props.EV5} type="number" min="0" max="255" maxLength="2" defaultValue="255" /> 
          <p>IV</p>
          <input className="statInput" onChange={props.IV5} type="number" min="1" max="31" maxLength="2" defaultValue="31" /></div>
          <p>SPEED: {props.stat5} </p>
          <div>
            <p>EV</p>
            <input className="statInput" onChange={props.EV6} type="number" min="0" max="255" maxLength="2" defaultValue="255" /> 
            <p>IV</p>
            <input className="statInput" onChange={props.IV6} type="number" min="1" max="31" maxLength="2" defaultValue="31" /></div>
          </div>
          </div>
          </div>
          
    )
  }

  export default Comparison;