import './index.css';


const PokeInfo = (props) => {


    return (
      <div className="pokeinfoMain">
          <p id="pokeName" >pokemon: {props.pokeName}</p>
          <div className="container">
          <div className="display">
          <h3 id="image ">normal</h3>
          <img id="image" src={props.sprite}></img>
          <h3 id="image ">shiny</h3>
          <img id="image"src={props.shinySprite}></img>
        </div>
          <div className="statsDisplay">
          <h3>Base stats:</h3>
          <div className="statRow1">
          <p id="statsText">HP: {props.stat0}</p>
          <p id="statsText">ATTACK: {props.stat1}</p>
          <p id="statsText">DEFENCE: {props.stat2}</p>
          </div>
          <div className="statRow2">
          <p id="statsText">SP. ATK: {props.stat3}</p>
          <p id="statsText">SP. DEF: {props.stat4}</p>
          <p id="statsText">SPEED: {props.stat5}</p>
          </div>
          </div>
          </div>

          <div className="miscDisplay">
          <p id="statsText">Pokedex Number: {props.dex}</p>
          {/* <p>Type: {props.type1}</p>
          <p>{props.type2}</p> */}
          {/*props.types.length > 0 ? <p>Types:</p> : <p>Type</p>*/}
          {props.types.map((item, index) => <p id="statsText" key={index} > Type {index+1}: {item.type.name}</p>)}
          {props.abilities.map((item, index) => <p id="statsText" key={index}>Ability {index+1}:  {item.ability.name}</p>)}
          <p id="statsText">Height: {props.height}</p>
          <p id="statsText">Weight: {props.weight}</p>
        </div>
  

        <h4>Moves:</h4>
        <div className="moveDisplay">
          {props.moves.map((item, index) => {
            return( <div><li id="listItem" key={index}>{item.move.name}</li>
            </div>
            // console.log(move)
          )})}
        </div>
      </div>
    )
  }

export default PokeInfo;